import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizesModule } from './prize/prizes.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PrizesModule],
})
export class ApplicationModule {}
