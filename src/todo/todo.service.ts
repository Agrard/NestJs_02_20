import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrUpdateTodoDto } from './create-todo.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { Todo } from 'src/entities/todo.entity';
import { skip, take } from 'rxjs';

// export interface Todo{

//   id: number;
//   name: string;
// }

let nextId = 1;

// const todos: Todo[] = [
//   { id: nextId++, name: 'Zoli1' },
//   { id: nextId++, name: 'Zoli2' },
//   { id: nextId++, name: 'Zoli3' },
//   { id: nextId++, name: 'Zoli4' },
//   { id: nextId++, name: 'Zoli5' },
// ];

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
){}

getTodos(limit: number, offset: number): Promise<Todo[]>{
  return this.todoRepository.find(
      {skip: offset,
      take: limit,
      relations: ['user'],
    where: {
      users:{
        id: 1
      }
    }}
  );
}

getTodo(id: number): Promise<Todo> {
  return this.todoRepository.findOneBy({id});
}

async deleteTodo(id: number): Promise<void>{
  await this.todoRepository.delete(id);
}

updateTodo(id: number, todoDto: CreateOrUpdateTodoDto): Promise<Todo> {
  return this.todoRepository.save({
      id,
      ...todoDto,
})
}

async createTodo(todoDto: CreateOrUpdateTodoDto): Promise<Todo> {

  return await this.todoRepository.save(todoDto)
}



  // getTodos(limit: number, offset: number) {
  //   return todos.slice(offset, offset + limit);
  // }

  // getTodo(id: number): Todo{
  //   const todo = todos.find((todo) => todo.id === id);
  //   if(!todo){
  //     throw new NotFoundException();
  //   } else{
  //     return todo;
  //   }
  // }

  // deleteTodo(id: number){
  //   const index = todos.findIndex((todo) => todo.id === id);
  //   if(index === -1){
  //     throw new NotFoundException();
  //   }
  //   const todo = todos[index]
  //   todos.splice(index, 1)
  //   return todo;
  // }

  // async createTodo(todoDto: CreateOrUpdateTodoDto){     
    // const todo: Todo = {
    //   id: nextId++,
    //   ...todoDto,
    // };

    // todos.push(todo);
    // return todo;
  // }

  // updateTodo(id: number, todoDto: CreateOrUpdateTodoDto) {
  //   // Object.assign(todo, todoDto);
  //   // return todo;
  // }
}
