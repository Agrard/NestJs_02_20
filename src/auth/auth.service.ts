import { Injectable } from '@nestjs/common';
import { BaseUser, UsersService } from 'src/users/users.service';





@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, pass: string): Promise<BaseUser> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
   
}
