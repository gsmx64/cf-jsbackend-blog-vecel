"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/services/auth.service");
const admin_controller_1 = require("./controllers/admin.controller");
const admin_service_1 = require("./services/admin.service");
const users_entity_1 = require("./../users/entities/users.entity");
const posts_entity_1 = require("../posts/entities/posts.entity");
const comments_entity_1 = require("../comments/entities/comments.entity");
const categories_entity_1 = require("../categories/entities/categories.entity");
const settings_entity_1 = require("../settings/entities/settings.entity");
const users_service_1 = require("../users/services/users.service");
const posts_service_1 = require("../posts/services/posts.service");
const categories_service_1 = require("../categories/services/categories.service");
const comments_service_1 = require("../comments/services/comments.service");
const search_service_1 = require("../search/services/search.service");
const settings_service_1 = require("../settings/services/settings.service");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
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
            auth_service_1.AuthService,
            jwt_1.JwtService,
            admin_service_1.AdminService,
            users_service_1.UsersService,
            categories_service_1.CategoriesService,
            posts_service_1.PostsService,
            comments_service_1.CommentsService,
            search_service_1.SearchService,
            settings_service_1.SettingsService
        ],
        controllers: [admin_controller_1.AdminController],
        exports: [admin_service_1.AdminService, typeorm_1.TypeOrmModule]
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map