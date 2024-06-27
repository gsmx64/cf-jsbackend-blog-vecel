"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const search_controller_1 = require("./controllers/search.controller");
const auth_service_1 = require("../auth/services/auth.service");
const users_service_1 = require("../users/services/users.service");
const search_service_1 = require("./services/search.service");
const users_entity_1 = require("../users/entities/users.entity");
const posts_entity_1 = require("../posts/entities/posts.entity");
const categories_entity_1 = require("../categories/entities/categories.entity");
const comments_entity_1 = require("../comments/entities/comments.entity");
const settings_entity_1 = require("../settings/entities/settings.entity");
let SearchModule = class SearchModule {
};
exports.SearchModule = SearchModule;
exports.SearchModule = SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                posts_entity_1.PostsEntity,
                users_entity_1.UsersEntity,
                categories_entity_1.CategoriesEntity,
                comments_entity_1.CommentsEntity,
                settings_entity_1.SettingsEntity
            ])
        ],
        providers: [
            search_service_1.SearchService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
            users_service_1.UsersService
        ],
        controllers: [search_controller_1.SearchController]
    })
], SearchModule);
//# sourceMappingURL=search.module.js.map