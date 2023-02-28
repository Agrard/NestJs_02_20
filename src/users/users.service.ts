import { Injectable } from '@nestjs/common';

export interface BaseUser{
    id: string;
    username: string;
}
export interface User extends BaseUser{
    password: string;
}

@Injectable()
export class UsersService {

    private readonly users: User[] = [
        {
            id: "u1",
            username: "Gabor",
            password: 'password'
        },
        {
            id: "u2",
            username: "Tamás",
            password: 'password2'
        }
    ];
  findOne(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }
}
