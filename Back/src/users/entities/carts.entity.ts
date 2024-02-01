import { Product } from '../../products/entities/product.entity';
import { BaseEntity } from '../../config/base.entity';
import { ICart } from '../../interfaces/cart.interface';
import { Column, Entity, OneToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
import { UsersBuyerEntity } from './usersBuyer.entity'; // Asegúrate de que la ruta sea correcta

@Entity({ name: 'carts' })
export class CartEntity extends BaseEntity implements ICart {
    @Column()
    totalPrice: number;

    @OneToMany(() => Product,( Product) => Product, { eager: true })
    products: Product[];

    @OneToOne(() => UsersBuyerEntity, user => user.cart)
    user: UsersBuyerEntity;
}
