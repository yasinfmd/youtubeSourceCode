import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { BasketModule } from './basket/basket.module';

@Module({
  imports: [PostModule, UserModule, BasketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
