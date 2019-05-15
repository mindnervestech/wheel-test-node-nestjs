import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

/*
 * Data transfer object for Prize
 **/

export class CreatePrizeDto {
  @ApiModelProperty()
  @IsInt()
  readonly pNumber: number;
}
