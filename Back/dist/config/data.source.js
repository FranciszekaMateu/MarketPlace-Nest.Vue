"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDS = exports.DataSourceConfig = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
config_1.ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV}.env`,
});
const configService = new config_1.ConfigService();
exports.DataSourceConfig = {
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    migrationsRun: true,
    logging: false,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.AppDS = new typeorm_1.DataSource(exports.DataSourceConfig);
//# sourceMappingURL=data.source.js.map