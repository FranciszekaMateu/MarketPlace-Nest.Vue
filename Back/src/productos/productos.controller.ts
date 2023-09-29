// product.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './productos.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productoService: ProductosService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Producto> {
    return this.productoService.findOne(id);
  }

  @Post()
  create(@Body() producto: Producto): Promise<Producto> {
    return this.productoService.create(producto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() producto: Producto,
  ): Promise<Producto> {
    return this.productoService.update(id, producto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.productoService.remove(id);
  }
}
