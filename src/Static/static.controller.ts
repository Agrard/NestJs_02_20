import { Controller, Get, Header, Redirect, Render, Req, Res } from "@nestjs/common";
import { StaticService } from './static.service';
import { Request, Response } from 'express';

@Controller()
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

  @Get('/')
  @Header('x-application', 'my-app')
  getHello1(@Req() request: Request) {
    return request.headers;
  }

 
}
