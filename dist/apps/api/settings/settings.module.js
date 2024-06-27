"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const settings_controller_1 = require("./controllers/settings.controller");
const auth_service_1 = require("../auth/services/auth.service");
const users_service_1 = require("../users/services/users.service");
const settings_service_1 = require("./services/settings.service");
const settings_entity_1 = require("./entities/settings.entity");
const users_entity_1 = require("../users/entities/users.entity");
const posts_entity_1 = require("../posts/entities/posts.entity");
let SettingsModule = class SettingsModule {
};
exports.SettingsModule = SettingsModule;
exports.SettingsModule = SettingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                settings_entity_1.SettingsEntity,
                users_entity_1.UsersEntity,
                posts_entity_1.PostsEntity
            ])
        ],
        providers: [
            settings_service_1.SettingsService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
            users_service_1.UsersService
        ],
        controllers: [settings_controller_1.SettingsController]
    })
], SettingsModule);
//# sourceMappingURL=settings.module.js.map