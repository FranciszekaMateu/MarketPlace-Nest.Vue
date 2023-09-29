// product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './productos.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOne({ where: { id } });
  }

  create(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async update(id: number, producto: Producto): Promise<Producto> {
    await this.productoRepository.update(id, producto);
    return this.productoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
