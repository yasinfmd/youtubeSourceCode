import { Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MyUnathException } from './MyUnathException';

@Controller()
export class AppController {
  @Post()
  getHello(): string {
    throw new MyUnathException('Yetkisiz erişilemez');
    // işlemler
    throw new HttpException(
      {
        status: HttpStatus.OK,
        message: 'Mesjaım',
        date: new Date().getTime(),
      },
      HttpStatus.BAD_REQUEST,
    );
    throw new HttpException('Exception Mesajı', HttpStatus.BAD_REQUEST);
    return 'Selam';
  }
}
