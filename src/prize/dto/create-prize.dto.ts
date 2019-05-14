import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreatePrizeDto {
  @ApiModelProperty()
  @IsInt()
  readonly pNumber: number;
}
