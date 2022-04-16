import { Controller, Get } from '@nestjs/common';
import { LogService } from './log.service';
@Controller()
export class AppController {
  constructor(private logService: LogService) {}
  @Get('test')
  async getTest() {
    this.logService.add();

    console.log(this.logService.get());
    return 'Hi !';
  }
}
