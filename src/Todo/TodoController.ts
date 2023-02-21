import { Controller, Get, Header, Param, Post, Query, Redirect, Req, Res, } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { Response, Request, response } from 'express';
import { request } from 'http';
import { TodoService } from './TodoService';


@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/todos')
  getTodos(): object {
    return this.todoService.getTodos();
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

  @Get('')
  getTodoID2(@Param() params, @Query('limit') limit: string, @Query('offset',) offset: string, @Req() request: Request): object {
    const limitNumber = Number(limit);
    if (Number.isNaN(limitNumber)) {
      response.status(400)
      response.send(JSON.stringify({}))
      
      throw new BadRequestException();
    }
    return this.todoService.getTodoID(params);
  }


}

