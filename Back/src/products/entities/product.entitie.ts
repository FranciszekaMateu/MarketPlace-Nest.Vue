import { BaseEntity } from 'config/base.entity';
import { IProduct } from 'src/interfaces/product.interface';
import { Entity, Column } from 'typeorm';

@Entity()
export class Product extends BaseEntity implements IProduct {
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  description: string;
}
