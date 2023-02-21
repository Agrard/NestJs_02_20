import { Module } from '@nestjs/common';
import { StaticModule } from './Static/static.module';
import { StaticService } from './Static/static.service';
import { TodoModule } from './Todo/TodoModule';
import { TodoService } from './Todo/TodoService';

@Module({
  imports: [TodoModule,StaticModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
