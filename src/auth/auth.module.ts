import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt/dist';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constans';
import { LocalStrategy } from './local.strategy';


@Module({
    imports: [UsersModule,JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}
