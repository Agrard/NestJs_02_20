import { Controller, Get } from '@nestjs/common';
import { TodoService } from './TodoService';


@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/todos')
  getTodos(): object {
    return this.todoService.getTodos();
  }

}

