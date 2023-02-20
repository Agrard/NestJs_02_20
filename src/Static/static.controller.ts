import { Controller, Get } from '@nestjs/common';
import { StaticService } from './static.service';



@Controller()
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

  @Get('/')
  getHello(): string {
    return this.staticService.getHello();
  }
}

