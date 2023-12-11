import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Usuario } from '../usuario.entity';
import { CreateUsuarioDto } from '../create-usuario.dto'; // 1. Importar CreateUsuarioDto

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    try {
      return await this.usuariosRepository.find();
    } catch (error) {
      throw new BadRequestException('Error al obtener los usuarios');
    }
  }

  async findOne(options: FindOneOptions<Usuario>): Promise<Usuario> {
    try {
      const usuario = await this.usuariosRepository.findOne(options);
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      return usuario;
    } catch (error) {
      throw new BadRequestException('Error al obtener el usuario');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      const result = await this.usuariosRepository.delete(id);
      if (result.affected === 0)
        throw new NotFoundException('Usuario no encontrado');
    } catch (error) {
      throw new BadRequestException('Error al eliminar el usuario');
    }
  }

  async create(usuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
      const usuario = new Usuario();
      usuario.nombre = usuarioDto.nombre;
      usuario.apellido = usuarioDto.apellido;
      usuario.email = usuarioDto.email;
      usuario.password = usuarioDto.password; 
      return await this.usuariosRepository.save(usuario);
    } catch (error) {
      throw new BadRequestException(
        'Error al crear el usuario: ' + error.message,
      );
    }
  }
}
