import { BaseEntity, Column, Entity } from 'typeorm';
import { IUser } from '../../interfaces/user.interface';
import { ROLES } from '../../constants/roles';

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
