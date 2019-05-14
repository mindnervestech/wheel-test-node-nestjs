import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizesController } from './prizes.controller';
import { PrizesService } from './prizes.service';
import { Prize } from './prize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prize])],
  controllers: [PrizesController],
  providers: [PrizesService],
})
export class PrizesModule {}
