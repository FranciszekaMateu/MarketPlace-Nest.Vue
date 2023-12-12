import { Column } from 'typeorm';
import { UserEntity } from './users.entity';
export class UsersBuyerEntity extends UserEntity {
  @Column()
  firstName: string;
}
