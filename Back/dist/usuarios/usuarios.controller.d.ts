import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    create(usuario: Usuario): Promise<Usuario>;
    remove(id: number): Promise<void>;
}
