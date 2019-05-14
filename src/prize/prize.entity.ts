import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Prize {
  @ObjectIdColumn()
  @ApiModelProperty()
  id: ObjectID;

  @Column()
  @ApiModelProperty()
  myNumber: number;
}
