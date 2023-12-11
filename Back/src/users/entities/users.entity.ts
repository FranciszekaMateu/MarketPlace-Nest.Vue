import { BaseEntity, Column } from 'typeorm';
import { IUser } from '../../interfaces/user.interface';
import { ROLES } from '../../constants/roles';
export abstract class UserEntity extends BaseEntity implements IUser {
  @Column()
  id: number;

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
