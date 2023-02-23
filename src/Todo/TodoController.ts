import { Body, Controller, Get, Header, Param, Post, Put, Query, Redirect, Req, Res, } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { Response } from 'express';
import { request } from 'http';
import TodoDTO from './TodoDTO';
import { todosDTO } from './TodoDTOList';

import TodoListParam from './TodoListParam';
import { todos } from './todos';
import { TodoService } from './TodoService';

let todosData = todosDTO;

@Controller('')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  getTodos(@Query() param: TodoListParam): object {
    const limitNumber = Number(param.limit);
    if (Number.isNaN(limitNumber)) {
      throw new BadRequestException();
    }

    const offsetNumber = Number(param.offset);
    if (Number.isNaN(offsetNumber)) {

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


  @Get('todos')
  getTodosDTO(): TodoDTO[] {
   return todosData;
  }

  @Post('/todos')
  CreateTodo(@Body() createTodo: TodoDTO): TodoDTO{
    const newTodo: TodoDTO = {
      id: (todosData.length + 1).toString(),
      ...createTodo
    }
    todosData = [...todosData, newTodo];

    return newTodo;
  }

  


}

