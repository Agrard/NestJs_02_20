import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";
import { StaticModule } from "./static/static.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [TodoModule, StaticModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
