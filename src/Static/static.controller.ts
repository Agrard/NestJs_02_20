import { Controller, Get, Header, Post, Render,  Req,  UseGuards } from "@nestjs/common";
import { StaticService } from './static.service';



@Controller('static')
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

  @Get('')
  @Header('x-application', 'my-app')
  getHello1(@Req() request: Request) {
    return request.headers;
  }



 
}
