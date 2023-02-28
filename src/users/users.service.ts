import { Injectable } from '@nestjs/common';

export interface BaseUser{
    username: string;
}
export interface User extends BaseUser{
    password: string;
}

@Injectable()
export class UsersService {

    private readonly users: User[] = [
        {
            username: "Gabor",
            password: 'password'
        },
        {
            username: "Tamás",
            password: 'password2'
        }
    ];
  findOne(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}
