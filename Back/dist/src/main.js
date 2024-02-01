"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const morgan = require("morgan");
const constants_1 = require("./constants");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.use(morgan('dev'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transformOptions: { enableImplicitConversion: true },
    }));
    app.setGlobalPrefix('api');
    app.enableCors(constants_1.CORS);
    console.log(configService.get('PORT'));
    await app.listen(configService.get('PORT'));
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map