import { Test, TestingModule } from '@nestjs/testing';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';

describe('BasketController', () => {
  let controller: BasketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasketController],
      providers: [BasketService],
    }).compile();

    controller = module.get<BasketController>(BasketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
