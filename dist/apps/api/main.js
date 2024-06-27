"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const morgan = require("morgan");
const dns_1 = require("dns");
const app_module_1 = require("./app.module");
const constants_1 = require("./constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'fatal', 'error', 'warn', 'debug'],
        cors: true
    });
    (0, dns_1.setDefaultResultOrder)("ipv4first");
    app.use(morgan('dev'));
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const reflector = app.get(core_1.Reflector);
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    (process.env.NODE_ENV === 'production') && app.enableCors(constants_1.CORS);
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CF-Blog API')
        .setDescription('CF Blog API description for JS In Backend Bootcamp')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'apiKey',
        name: 'access_token',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access_token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    await app.listen(process.env.APP_PORT, '0.0.0.0');
    var decor = '-';
    var appUrl = `http://${process.env.APP_HOST}:${process.env.APP_PORT}/`;
    console.log(` \n` + decor.repeat(36));
    console.log(` >>> APP URL: ${appUrl}`);
    console.log(` >>> ENVIRONMENT: ${process.env.NODE_ENV}`);
    console.log(decor.repeat(36) + ` \n`);
}
bootstrap();
//# sourceMappingURL=main.js.map