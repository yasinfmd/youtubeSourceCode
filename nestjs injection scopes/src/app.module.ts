import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogService } from './log.service';
import { UserController } from './user/user.controller';
@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, LogService],
})
export class AppModule {}
