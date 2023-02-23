import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TodoService } from './todo.service';
import { IsInt, IsString } from "class-validator";
import { Type } from 'class-transformer';
import { TodoListParams } from "./TodoListParams";
import { CreateOrUpdateTodoDto } from "./create-todo.dto";


@Controller('/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('')
  createTodo(@Body() todo: CreateOrUpdateTodoDto) {
    return this.todoService.createTodo(todo);
  }

  @Get('')
  getTodos(@Query() params: TodoListParams) {
    return this.todoService.getTodos(params.limit, params.offset);
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(Number(id));
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string){
    return this.todoService.deleteTodo(Number(id))
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() updateTodo: CreateOrUpdateTodoDto){
    return this.todoService.updateTodo(Number(id), updateTodo)
  }
}
