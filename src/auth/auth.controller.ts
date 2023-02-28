import { Controller, Get, Post, Render, Req, UseGuards } from "@nestjs/common";
import { BaseUser } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('')
  @Render('login.ejs')
  getLogin(){
    return {}
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req){
    return this.authService.login(req.user);
}

}