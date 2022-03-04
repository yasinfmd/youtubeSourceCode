import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';

@Module({
  controllers: [BasketController],
  providers: [BasketService]
})
export class BasketModule {}
