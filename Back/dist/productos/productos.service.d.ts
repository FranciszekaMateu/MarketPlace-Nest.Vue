import { Repository } from 'typeorm';
import { Producto } from './productos.entity';
export declare class ProductosService {
    private readonly productoRepository;
    constructor(productoRepository: Repository<Producto>);
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    create(producto: Producto): Promise<Producto>;
    update(id: number, producto: Producto): Promise<Producto>;
    remove(id: number): Promise<void>;
}
