import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoMvcController } from './todo.mvc.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [],
  controllers: [TodoController, TodoMvcController],
  providers: [TodoService],
})
export class TodoModule {}
