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
const data_source_1 = require("./config/data.source");
const auth_module_1 = require("./auth/auth.module");
const admin_module_1 = require("./admin/admin.module");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const categories_module_1 = require("./categories/categories.module");
const comments_module_1 = require("./comments/comments.module");
const search_module_1 = require("./search/search.module");
const settings_module_1 = require("./settings/settings.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env.${process.env.NODE_ENV.trim()}`,
                isGlobal: true
            }),
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({ ...data_source_1.DataSourceConfig }),
            admin_module_1.AdminModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            categories_module_1.CategoriesModule,
            comments_module_1.CommentsModule,
            search_module_1.SearchModule,
            settings_module_1.SettingsModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map