import { Test } from '@nestjs/testing';
import { PrizesController } from './prizes.controller';
import { PrizesService } from './prizes.service';
import { PrizeRepository } from './prize.repository';
import { CreatePrizeDto } from './dto/create-prize.dto';

describe('Prize Controller', async () => {
  let controller: PrizesController;
  let prizeService: PrizesService;

  beforeEach(async () => {
    const testingModule = await Test.createTestingModule({
      controllers: [PrizesController],
      providers: [
        PrizesService,
        {
          provide: 'PrizeRepository',
          useValue: PrizeRepository,
        },
      ],
    }).compile();
    controller = testingModule.get<PrizesController>(PrizesController);
    prizeService = testingModule.get<PrizesService>(PrizesService);
  });

  describe('prizeCreate', async () => {
    it('should create prize entry', async () => {
      const params: CreatePrizeDto = {
        pNumber: 1,
      };
      const admin = await controller.create(params);
      expect(admin);
    });
  });
});
