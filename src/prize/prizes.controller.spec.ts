import { Test, TestingModule } from '@nestjs/testing';
import { PrizesController } from './prizes.controller';
import { PrizesService } from './prizes.service';
import { CreatePrizeDto } from './dto/create-prize.dto';
import { Prize } from './prize.entity';
jest.mock('./prizes.service');

describe('Prize Controller', async () => {
  let testingModule: TestingModule;
  let prizeService: PrizesService;
  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      controllers: [PrizesController],
      providers: [PrizesService],
    }).compile();
  });
  beforeEach(() => {
    prizeService = testingModule.get<PrizesService>(PrizesService);
  });
  describe('prizeCreate', () => {
    it('should create prize entry', async () => {
      const params: Prize = {
        id: '5cdbf8861b2a557278d3efae',
        myNumber: 1,
      };
      const reqParams: CreatePrizeDto = {
        pNumber: 1,
      };
      jest.spyOn(prizeService, 'create').mockResolvedValue(params);
      const appController = testingModule.get<PrizesController>(
        PrizesController,
      );
      expect(await appController.create(reqParams)).toBe(params);
    });
  });
});
