// src/usuarios/usuarios.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  findOne(id: string): Promise<Usuario> {
    return this.usuariosRepository.findOne(id);
  }

  create(usuario: Usuario): Promise<Usuario> {
    return this.usuariosRepository.save(usuario);
  }

  async remove(id: string): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
