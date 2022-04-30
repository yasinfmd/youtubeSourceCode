import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  constructor(private scheduleRegister: SchedulerRegistry) {}
  @Cron(CronExpression.EVERY_5_SECONDS, { name: 'test2' })
  handleOtherCron() {
    const jobs = this.scheduleRegister.getCronJobs();
    console.log(jobs);
    const job = this.scheduleRegister.getCronJob('test2');
    console.log('j', job.lastDate());
    this.logger.debug('Her 5 saniye');
  }

  @Cron('*/20 * * * * *', {
    name: 'test',
  })
  handleMyCron() {
    this.logger.debug('Her 20 saniye');
  }
}
