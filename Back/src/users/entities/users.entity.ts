import {  Column, Entity } from 'typeorm';
import { IUser } from '../../interfaces/user.interface';
import { ROLES } from '../../constants/roles';
import { BaseEntity } from '../../config/base.entity';
@Entity({ name: 'users' })
export abstract class UserEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;
}
