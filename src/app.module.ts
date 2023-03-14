import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";
import { StaticModule } from "./static/static.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "./entities/todo.entity";
import { User } from "./entities/user.entity";


@Module({
  imports: [
    TodoModule,
    StaticModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjsgyakorlat',
      entities: [Todo, User],
      synchronize: true,
      logging: 'all'
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
