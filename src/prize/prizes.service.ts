import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prize } from './prize.entity';
import { CreatePrizeDto } from './dto/create-prize.dto';

@Injectable()
export class PrizesService {
  constructor(
    @InjectRepository(Prize)
    private readonly prizeRepository: Repository<Prize>,
  ) {}

  async create(createPrizeDto: CreatePrizeDto): Promise<Prize> {
    const { pNumber } = createPrizeDto;
    let prize = new Prize();
    prize.myNumber = pNumber;
    return await this.prizeRepository.save(prize);
  }
}
