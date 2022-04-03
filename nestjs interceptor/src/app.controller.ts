import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LogInterceptor } from './log.interceptor';

const getString = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('merhaba');
    }, 2000);
  });
};
@Controller()
//@UseInterceptors(LogInterceptor)
export class AppController {
  @Get()
  async getHello(): Promise<unknown> {
    const str = await getString();
    return str;
  }
}
