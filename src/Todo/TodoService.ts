import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { NotFoundError } from 'rxjs';
import TodoDTO from './TodoDTO';
import { todos } from './todos';


@Injectable()
export class TodoService {
  getTodos(limit:number, offset: number) {
    return todos.slice(offset,offset + limit)
  }

  getTodoID(id: string) {
    // throw new NotFoundException();
    return {
      id: id,
      name: `Todo #${id}`
    };
  }
}
