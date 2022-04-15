import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleInit,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnApplicationShutdown,
    BeforeApplicationShutdown
{
  beforeApplicationShutdown(signal?: string) {
    console.log('signal2', signal);
  }
  onModuleInit(): any {
    console.log('Moduller yüklendi');
  }
  onApplicationBootstrap(): any {
    console.log('Applicatiopn Bootstrap');
  }

  onApplicationShutdown(signal?: string): any {
    console.log('signal', signal);
  }
}
