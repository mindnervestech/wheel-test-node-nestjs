import { EntityRepository, Repository } from 'typeorm';
import { Prize } from './prize.entity';

@EntityRepository(Prize)
export class PrizeRepository extends Repository<Prize> {}
