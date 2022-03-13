import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { LoggerMiddleware } from './logger.middleware';
import { TestMiddleware } from './test.middleware';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {
  //implements NestModule
  /* configure(consumer: MiddlewareConsumer) {
    //{
    //       path: 'user',
    //       method: RequestMethod.PATCH,
    //     }
    //
    consumer
      .apply(TestMiddleware, LoggerMiddleware)
      .forRoutes(AppController, 'user');
  }*/
}
