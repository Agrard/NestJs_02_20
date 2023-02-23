import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo/todo.module';
import { StaticModule } from './static/static.module';
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(3000);
}
bootstrap();
