import { NestFactory } from '@nestjs/core';
import { StaticModule } from './Static/static.module';


async function bootstrap() {
  const app = await NestFactory.create(StaticModule);
  await app.listen(3000);
}
bootstrap();
