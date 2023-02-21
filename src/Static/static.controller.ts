import { Controller, Get, Header, Param, Post, Redirect, Req, Res, } from '@nestjs/common';
import { Response, Request, response } from 'express';
import { request } from 'http';
import { StaticService } from './static.service';



@Controller()
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

   // 1. Header visszaadása JSON body-ban
  

   // Ez az egyszerűbb (nestJs féle)
   
  // @Get('/')
  // getHello(@Req() request: Request): any {
  //   return request.headers; 
  // }

    //Másik megoldás (expresses)
     @Get('/')
     getHeader(@Req() request: Request, @Res() response: Response): any {
       response.send(JSON.stringify(request.headers))
     }

   // 2. X-APPLICATON respone headert küldjünk vissza

  //  @Get('/')
  //  @Header('Cache-Control', 'none')
  //  getHello2(@Req() request: Request, @Res() response: Response): any {
  //    response.send(JSON.stringify(request.headers))
  //  }

    @Get('/manual')
    getHello(@Req() request: Request, @Res() response: Response) {
      response.header('x-application', 'my-app')
      response.header('content-type', 'application/json')
      response.send(JSON.stringify(request.headers))
    }

    // 3. /test redirect-eljen a / <-- utvonalra


    @Get('/test')
    getTest(@Res() response: Response) {
    response.redirect('/')
    }

    // 4. /todos/id amilyen id-t lekérünk azt vissza adja

    @Get('/todos/:id')
    getId(@Param() params): string {
      console.log(params.id);
      return `Todos ID: #${params.id}`;
    }


    

  


}

