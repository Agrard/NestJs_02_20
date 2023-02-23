import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrUpdateTodoDto } from './create-todo.dto';

export interface Todo {
  id: number;
  name: string;
}

let nextId = 1;

const todos: Todo[] = [
  { id: nextId++, name: 'Zoli' },
  { id: nextId++, name: 'Zoli' },
  { id: nextId++, name: 'Zoli' },
  { id: nextId++, name: 'Zoli' },
  { id: nextId++, name: 'Zoli' },
];

@Injectable()
export class TodoService {
  getTodos(limit: number, offset: number) {
    return todos.slice(offset, offset + limit);
  }
  
  getTodo(id: number): Todo{
    const todo = todos.find((todo) => todo.id === id);
    if(!todo){
      throw new NotFoundException();
    } else{
      return todo;
    }
  }

  deleteTodo(id: number){
    const index = todos.findIndex((todo) => todo.id === id);
    if(index === -1){
      throw new NotFoundException();
    }
    const todo = todos[index]
    todos.splice(index, 1)
    return todo;
  }

  createTodo(todoDto: CreateOrUpdateTodoDto) {
    const todo: Todo = {
      id: nextId++,
      ...todoDto,
    };

    todos.push(todo);
    return todo;
  }

  updateTodo(id: number, todoDto: CreateOrUpdateTodoDto) {
    const todo = todos.map((item) => item.id === id)
    if (!todo) {
      throw new NotFoundException
    }
    return todo
  }
}
