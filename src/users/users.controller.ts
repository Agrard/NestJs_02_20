import {
  Controller,
  Get,
  Post,
  Render,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BaseUser, UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Request() req) {
    const user = await this.userService.findOne(
      (req.user as BaseUser).username,
    );
    return user.profile;
  }
}
