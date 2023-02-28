import { Controller, Get, Header, Post, Render,  Req,  UseGuards } from "@nestjs/common";
import { StaticService } from './static.service';
import { AuthGuard } from "@nestjs/passport/dist";
import { LocalStrategy } from "src/auth/local.strategy";
import { LocalAuthGuard } from "src/auth/local-auth.guard";


@Controller('')
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

  @Get('/asd')
  @Header('x-application', 'my-app')
  getHello1(@Req() request: Request) {
    return request.headers;
  }

  @Get('/')
  @Render('login.ejs')
  getLogin(){
    return {}
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req){
  return req.user;
}

 
}
