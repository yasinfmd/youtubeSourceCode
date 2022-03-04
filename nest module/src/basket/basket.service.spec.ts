import { Test, TestingModule } from '@nestjs/testing';
import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasketService],
    }).compile();

    service = module.get<BasketService>(BasketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
