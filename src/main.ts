import { NestFactory } from '@nestjs/core';
import { StaticModule } from './Static/static.module';
import { TodoService } from './Todo/TodoService';



async function bootstrap() {
  const app = await NestFactory.create(TodoService);
  await app.listen(3000);
}
bootstrap();
