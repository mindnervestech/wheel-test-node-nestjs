import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prize } from './prize.entity';
import { CreatePrizeDto } from './dto/create-prize.dto';

// Injectable service for prize controller
@Injectable()
export class PrizesService {
  constructor(
    @InjectRepository(Prize)
    private readonly prizeRepository: Repository<Prize>,
  ) {}

  // Create method to save the number in CreatePrizeDto
  async create(createPrizeDto: CreatePrizeDto): Promise<Prize> {
    const { pNumber } = createPrizeDto;
    let prize = new Prize();
    prize.myNumber = pNumber;
    // Saving the number into database
    return await this.prizeRepository.save(prize);
  }
}
