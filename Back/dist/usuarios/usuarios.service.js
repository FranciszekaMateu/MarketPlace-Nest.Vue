"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
let UsuariosService = class UsuariosService {
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    async findAll() {
        try {
            return await this.usuariosRepository.find();
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al obtener los usuarios');
        }
    }
    async findOne(options) {
        try {
            const usuario = await this.usuariosRepository.findOne(options);
            if (!usuario)
                throw new common_1.NotFoundException('Usuario no encontrado');
            return usuario;
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al obtener el usuario');
        }
    }
    async remove(id) {
        try {
            const result = await this.usuariosRepository.delete(id);
            if (result.affected === 0)
                throw new common_1.NotFoundException('Usuario no encontrado');
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al eliminar el usuario');
        }
    }
    async create(usuarioDto) {
        try {
            const usuario = new usuario_entity_1.Usuario();
            usuario.nombre = usuarioDto.nombre;
            usuario.apellido = usuarioDto.apellido;
            usuario.email = usuarioDto.email;
            usuario.password = usuarioDto.password;
            return await this.usuariosRepository.save(usuario);
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al crear el usuario: ' + error.message);
        }
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map