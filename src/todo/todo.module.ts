import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoMvcController } from './todo.mvc.controller';
import { TodoService } from './todo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "../entities/todo.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([Todo])
  ],
  exports:[TypeOrmModule],
  controllers: [TodoController, TodoMvcController],
  providers: [TodoService],
})
export class TodoModule {}
