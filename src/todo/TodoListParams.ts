import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class TodoListParams {
  @IsInt()
  @Type(() => Number)
  limit: number;

  @IsInt()
  @Type(() => Number)
  offset: number;
}
