import { Body, Controller, Delete, Get, Param, Post, Put, Query, Render } from "@nestjs/common";
import { TodoService } from './todo.service';
import { IsInt, IsString } from "class-validator";
import { Type } from 'class-transformer';
import { TodoListParams } from "./TodoListParams";
import { CreateOrUpdateTodoDto } from "./create-todo.dto";


@Controller('/todos')
export class TodoMvcController {
    constructor(private readonly todoService: TodoService) { }

    @Get('edit/:id')
    @Render('todo.ejs')
    public index2(@Param('id') id: string) {
        const todoId = this.todoService.getTodo(Number(id));
        return { todoId }
    }

    @Post('')
    @Render('index.ejs')
    public CreateTodo(@Body() todo: CreateOrUpdateTodoDto) {
        this.todoService.createTodo(todo)
        const todos = this.todoService.getTodos(10, 0)
        return { todos };
    }

    @Post('/delete/:id')
    @Render('index.ejs')
    public deletetodo(@Param('id') id: string){
         this.todoService.deleteTodo(Number(id))
        return this.listTodos('Todo sikeresen törölve')
    }

    private listTodos(message: string | null) {
        const todos = this.todoService.getTodos(10,0)
        return{todos, message}
    }

    @Get('')
    @Render('index.ejs')
    public index() {
        const todos = this.todoService.getTodos(10, 0)
        return { todos };
    }

    @Post('/edit/:id')
    @Render('todo.ejs')
    public updateTodo(@Param('id') id: string, @Body() todo: CreateOrUpdateTodoDto) {
        const updateTodo = this.todoService.updateTodo(Number(id), todo) 
        return{todoId:updateTodo}  
    }
}
