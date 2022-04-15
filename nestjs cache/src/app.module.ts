import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    CacheModule.register({
      //ttl: 50000,
      isGlobal: true,
      //max: 50,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
