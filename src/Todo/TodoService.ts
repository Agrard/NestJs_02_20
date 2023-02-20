import { Injectable } from '@nestjs/common';
import { todos } from './todos';


@Injectable()
export class TodoService {
  getTodos(): object {
    return todos
  }
}
