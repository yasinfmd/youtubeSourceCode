import { Controller, Get } from '@nestjs/common';
import { TaskService } from './TaskService';

@Controller()
export class AppController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getTest() {
    this.taskService.handleMyCron();
    return 'Hi !';
  }
}
