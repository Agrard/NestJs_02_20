import { Body, Controller, Get, Header, Param, Post, Put, Query, Redirect, Req, Res, } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { Response, Request, response } from 'express';
import { request } from 'http';
import TodoDTO from './TodoDTO';

import TodoListParam from './TodoListParam';
import { todos } from './todos';
import { TodoService } from './TodoService';

let todosData = todos;

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


  @Get('todo/dto')
  getTodosDTO(): TodoDTO[] {
   return todosData;
  }

  @Post('POST/todo/:id')
  CreateTodo(@Body() createTodo: TodoDTO): TodoDTO{
    const newTodo: TodoDTO = {
      id: (todosData.length + 1).toString(),
      ...createTodo
    }
    todosData = [...todosData, newTodo];

    return newTodo;
  }

  


}

