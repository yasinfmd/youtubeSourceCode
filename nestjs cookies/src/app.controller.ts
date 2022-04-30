import { Controller, Get, Req, Res } from '@nestjs/common';
import { CustomCookie } from './CustomCookie.decorator';

@Controller()
export class AppController {
  @Get()
  async getTest(@Req() request) {
    console.log(request.cookies);
    return 'Hi !';
  }

  @Get('/test')
  getDeneme(@Res({ passthrough: true }) response) {
    // işlemler
    response.cookie('nestjs', 'Backend');
    return { id: 1 };
  }

  @Get('/deneme')
  getDeneme2(@CustomCookie('nestjs') val: string) {
    // işlemler
    console.log('val', val);
    return { id: 1 };
  }
}
