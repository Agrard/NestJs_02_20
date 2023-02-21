import { Type } from "class-transformer";
import { IsInt } from "class-validator";

class TodoListParam {
  @IsInt()
  @Type(() => Number)
  limit: number;

  @IsInt()
  @Type(() => Number)
  offset: number; 
  }

export default TodoListParam;