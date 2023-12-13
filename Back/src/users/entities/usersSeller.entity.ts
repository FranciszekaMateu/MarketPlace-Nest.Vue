import { Column } from 'typeorm';
import { UserEntity } from './users.entity';
export class UsersSellerEntity extends UserEntity {
  @Column()
  Ename: string;
}
