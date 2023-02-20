import { Module } from '@nestjs/common';
import { StaticModule } from './Static/static.module';
import { StaticService } from './Static/static.service';
import { TodoModule } from './Todo/TodoModule';
import { TodoService } from './Todo/TodoService';

@Module({
  imports: [],
  controllers: [TodoModule,StaticModule],
  providers: [TodoService,StaticService],
})
export class AppModule {}
