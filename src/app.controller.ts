import { Controller, Get, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Body() obj: any): string {
  //   // console.log(typeof createHolidayDto);
  //   console.log(typeof obj);

  //   return this.appService.getHello();
  // }
}
