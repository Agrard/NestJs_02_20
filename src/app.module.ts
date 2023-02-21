import { Module } from '@nestjs/common';
import { StaticModule } from './Static/static.module';
import { TodoModule } from './Todo/TodoModule';

@Module({
  imports: [TodoModule,StaticModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
