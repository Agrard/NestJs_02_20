import { Module } from '@nestjs/common';
import { TodoController } from './TodoController';
import { TodoService } from './TodoService';


@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
