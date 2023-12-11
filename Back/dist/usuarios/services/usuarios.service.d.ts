import { FindOneOptions, Repository } from 'typeorm';
import { Usuario } from '../usuario.entity';
import { CreateUsuarioDto } from '../create-usuario.dto';
export declare class UsuariosService {
    private usuariosRepository;
    constructor(usuariosRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findOne(options: FindOneOptions<Usuario>): Promise<Usuario>;
    remove(id: number): Promise<void>;
    create(usuarioDto: CreateUsuarioDto): Promise<Usuario>;
}
