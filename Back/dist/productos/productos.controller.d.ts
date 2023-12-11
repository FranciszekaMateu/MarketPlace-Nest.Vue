import { ProductosService } from './productos.service';
import { Producto } from './productos.entity';
export declare class ProductosController {
    private readonly productoService;
    constructor(productoService: ProductosService);
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    create(producto: Producto): Promise<Producto>;
    update(id: number, producto: Producto): Promise<Producto>;
    remove(id: number): Promise<void>;
}
