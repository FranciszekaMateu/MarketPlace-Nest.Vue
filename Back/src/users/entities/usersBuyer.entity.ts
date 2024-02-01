import { Column, Entity, OneToOne } from 'typeorm';
import { UserEntity } from './users.entity';
import { CartEntity } from './carts.entity'; // Asegúrate de que la ruta sea correcta

@Entity({ name: 'usersBuyer'})
export class UsersBuyerEntity extends UserEntity {
   @OneToOne(() => CartEntity, cart => cart.user)
    cart: CartEntity;
}
