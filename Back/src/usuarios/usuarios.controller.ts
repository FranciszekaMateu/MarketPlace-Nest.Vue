import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './create-usuario.dto'; // Asegúrate de crear este archivo con la clase y validaciones correspondientes.

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(): Promise<Usuario[]> {
    try {
      return await this.usuariosService.findAll();
    } catch (error) {
      throw new BadRequestException('Error al obtener los usuarios');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Usuario> {
    try {
      const usuario = await this.usuariosService.findOne({ where: { id: id } });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      return usuario;
    } catch (error) {
      throw new BadRequestException(
        'Error al obtener el usuario' + error.message,
      );
    }
  }

  @Post()
  async create(@Body() usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      return await this.usuariosService.create(usuarioDto);
    } catch (error) {
      throw new BadRequestException(
        'Error al crear el usuario' + error.message,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.usuariosService.remove(id);
    } catch (error) {
      throw new BadRequestException('Error al eliminar el usuario');
    }
  }
}
