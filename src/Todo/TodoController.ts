import { Controller, Get, Header, Param, Post, Query, Redirect, Req, Res, } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { Response, Request, response } from 'express';
import { request } from 'http';
import TodoListParam from './TodoListParam';
import { TodoService } from './TodoService';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  getTodos(@Query() param: TodoListParam, @Req() request: Request): object {
    const limitNumber = Number(param.limit);
    if (Number.isNaN(limitNumber)) {
      response.status(400)
      response.send(JSON.stringify({}))
      
      throw new BadRequestException();
    }

    const offsetNumber = Number(param.offset);
    if (Number.isNaN(offsetNumber)) {
      response.status(400)
      response.send(JSON.stringify({}))
      
      throw new BadRequestException();
    }
    return this.todoService.getTodos(limitNumber,offsetNumber);
  }

  // 4. /todos/id amilyen id-t lekérünk azt vissza adja

  @Get('/todos/manual/:id')
  getIdManual(@Param() params, @Res() response: Response) {
    console.log(params.id);
    response.send(`Manual Todos ID: #${params.id}`);
  }

  @Get('/todos/:id')
  getTodoID(@Param() params): object {
    return this.todoService.getTodoID(params);
  }

  


}

