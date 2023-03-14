import { Injectable } from '@nestjs/common';

export interface BaseUser{
    id: string;
    username: string;
    profile:  {
        points: number;
    }
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
            password: 'password',
            profile: {
                points: 4
            }
        },
        // {
        //     id: "u2",
        //     username: "Tamás",
        //     password: 'password2',
        //     profile: {
        //         points: 10
        //     }
        // }
    ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
