import { IsEmail, IsNotEmpty } from 'class-validator/types/decorator/decorators';


  export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
  }