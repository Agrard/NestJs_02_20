import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";
import { StaticModule } from "./static/static.module";

@Module({
  imports: [TodoModule, StaticModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
