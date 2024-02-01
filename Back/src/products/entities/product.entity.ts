import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { IProduct } from '../../interfaces/product.interface';
import { UsersSellerEntity } from '../../users/entities/usersSeller.entity'; // Asegúrate de que la ruta sea correcta

@Entity({ name: 'products' })
export class Product extends BaseEntity implements IProduct {
    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @Column()
    description: string;

    @ManyToOne(() => UsersSellerEntity, user => user.products)
    owner: UsersSellerEntity;
}
