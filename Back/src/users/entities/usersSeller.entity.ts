import { Entity, Column, OneToMany } from 'typeorm';
import { UserEntity } from './users.entity';

import {Product} from '../../products/entities/product.entity';

@Entity({ name: 'usersSeller' })
export class UsersSellerEntity extends UserEntity {
    @Column()
    Ename: string;

    @OneToMany(() => Product, product => product.owner)
    products: Product[];
}

