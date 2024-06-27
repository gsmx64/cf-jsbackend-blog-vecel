"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalRolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_1 = require("../../constants/roles");
const key_decorators_1 = require("../../constants/key.decorators");
let LocalRolesGuard = class LocalRolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.get(key_decorators_1.PUBLIC_KEY, context.getHandler());
        if (isPublic) {
            return true;
        }
        const roles = this.reflector.get(key_decorators_1.ROLES_KEY, context.getHandler());
        const admin = this.reflector.get(key_decorators_1.ADMIN_KEY, context.getHandler());
        const req = context.switchToHttp().getRequest();
        const { roleUser } = req;
        if (roles === undefined) {
            if (!admin) {
                return true;
            }
            else if (admin && roleUser === admin) {
                return true;
            }
            else if (roleUser === roles_1.ROLES.MODERATOR) {
                return true;
            }
            else if (roleUser === roles_1.ROLES.EDITOR) {
                return true;
            }
            else if (roleUser === roles_1.ROLES.NONE) {
                return true;
            }
            else {
                throw new common_1.UnauthorizedException('No permissions for this operation.');
            }
        }
        if (roleUser === roles_1.ROLES.ADMIN) {
            return true;
        }
        else if (roleUser === roles_1.ROLES.MODERATOR) {
            return true;
        }
        else if (roleUser === roles_1.ROLES.EDITOR) {
            return true;
        }
        const isAuth = roles.some((role) => role === roleUser);
        if (!isAuth) {
            throw new common_1.UnauthorizedException('No permissions for this operation.');
        }
        return true;
    }
};
exports.LocalRolesGuard = LocalRolesGuard;
exports.LocalRolesGuard = LocalRolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], LocalRolesGuard);
//# sourceMappingURL=local-auth.roles.guard.js.map