"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const users_controller_1 = require("./controllers/users.controller");
const auth_service_1 = require("../auth/services/auth.service");
const users_service_1 = require("./services/users.service");
const users_entity_1 = require("./entities/users.entity");
const posts_entity_1 = require("../posts/entities/posts.entity");
const comments_entity_1 = require("../comments/entities/comments.entity");
const categories_entity_1 = require("../categories/entities/categories.entity");
const settings_entity_1 = require("../settings/entities/settings.entity");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                users_entity_1.UsersEntity,
                posts_entity_1.PostsEntity,
                comments_entity_1.CommentsEntity,
                categories_entity_1.CategoriesEntity,
                settings_entity_1.SettingsEntity
            ])
        ],
        providers: [
            users_service_1.UsersService,
            auth_service_1.AuthService,
            jwt_1.JwtService
        ],
        controllers: [users_controller_1.UsersController],
        exports: [users_service_1.UsersService, typeorm_1.TypeOrmModule]
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map