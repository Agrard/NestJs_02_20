import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StaticModule } from './Static/static.module';
import { TodoModule } from './Todo/TodoModule';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
