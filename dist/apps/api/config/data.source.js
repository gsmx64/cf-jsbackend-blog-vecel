"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDS = exports.DataSourceConfig = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const users_entity_1 = require("../users/entities/users.entity");
const posts_entity_1 = require("../posts/entities/posts.entity");
const categories_entity_1 = require("../categories/entities/categories.entity");
const comments_entity_1 = require("../comments/entities/comments.entity");
const settings_entity_1 = require("../settings/entities/settings.entity");
const session_entity_1 = require("./session.entity");
config_1.ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV.trim()}`,
});
exports.DataSourceConfig = {
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: process.env.APP_DB_HOST,
    port: Number(process.env.APP_DB_PORT),
    username: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB_NAME,
    schema: process.env.APP_DB_SCHEMA,
    logging: false,
    synchronize: true,
    name: 'default',
    entities: [users_entity_1.UsersEntity, posts_entity_1.PostsEntity, categories_entity_1.CategoriesEntity, comments_entity_1.CommentsEntity, settings_entity_1.SettingsEntity, session_entity_1.SessionEntity],
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    subscribers: [__dirname + '/../subscriber/**/*{.ts,.js}'],
    migrationsRun: true,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy()
};
exports.AppDS = new typeorm_1.DataSource(exports.DataSourceConfig);
//# sourceMappingURL=data.source.js.map