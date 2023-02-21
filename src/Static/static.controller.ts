import { Controller, Get, Header, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { request } from 'http';
import { StaticService } from './static.service';



@Controller()
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

   //Header visszaadása
   // Ez az egyszerűbb és ajánlotabb is
  @Get('/')
  getHello(@Req() request: Request): any {
    return request.headers;
    // response.send(request)  
  }

    //Másik megoldása

    // @Get('/')
    // getHello(@Req() request: Request, @Res() response: Response): any {
    //   // return request.headers;
    //   response.write(JSON.stringify(request.headers))
      
    // }


}

