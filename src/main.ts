import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo/todo.module';
import { StaticModule } from './static/static.module';
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));


  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  await app.listen(3000);
}
bootstrap();
