"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("../config/data.source");
const users_module_1 = require("./users/users.module");
const products_service_1 = require("./products/services/products.service");
const products_controller_1 = require("./products/controllers/products.controller");
const products_module_1 = require("./products/products.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.${process.env.NODE_ENV}.env',
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({ ...data_source_1.DataSourceConfig }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
        ],
        providers: [products_service_1.ProductsService],
        controllers: [products_controller_1.ProductsController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map