import { IsString } from 'class-validator';

export class CreateOrUpdateTodoDto {
  @IsString()
  name: string;
}
