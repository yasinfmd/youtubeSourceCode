import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getMain() {
    return { message: 'Merhaba Dünya' };
  }

  @Get('/user')
  @Render('user')
  getUser() {
    return {
      number: null,
      data: [
        { id: 1, name: 'Selam' },
        { id: 2, name: 'Merhaba' },
      ],
    };
  }
}
