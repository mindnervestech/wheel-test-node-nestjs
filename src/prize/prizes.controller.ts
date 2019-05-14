import {
  Controller,
  Post,
  Body,
  UsePipes,
  Logger,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ValidationPipe } from '../shared/error/validation.pipe';
import { CreatePrizeDto } from './dto/create-prize.dto';
import { PrizesService } from './prizes.service';
import { Prize } from './prize.entity';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiUseTags('Prizes')
@Controller('prizes')
export class PrizesController {
  logger = new Logger('CommentController');
  constructor(private readonly prizesService: PrizesService) {}

  @Post()
  @ApiOperation({ title: 'Create prize' })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
    type: Prize,
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() createPrizeDto: CreatePrizeDto) {
    return await this.prizesService.create(createPrizeDto);
  }
}
