import { BaseEntity } from 'config/base.entity';
import { IProduct } from 'src/interfaces/product.interface';
export declare class Product extends BaseEntity implements IProduct {
    name: string;
    price: number;
    stock: number;
    description: string;
}
