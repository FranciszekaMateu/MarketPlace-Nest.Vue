import { BaseEntity } from 'typeorm';
import { IUser } from '../../interfaces/user.interface';
import { ROLES } from '../../constants/roles';
export declare abstract class UserEntity extends BaseEntity implements IUser {
    firstName: string;
    username: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: ROLES;
}
