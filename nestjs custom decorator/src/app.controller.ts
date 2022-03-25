import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomDecorator } from './CustomDecorator.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@CustomDecorator('email') test: any): string {
    console.log(test);
    return this.appService.getHello();
  }
}
