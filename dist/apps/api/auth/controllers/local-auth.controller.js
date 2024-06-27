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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalAuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("../guards/local-auth.guard");
const auth_service_1 = require("../services/auth.service");
const auth_dto_1 = require("../dto/auth.dto");
const public_decorator_1 = require("../decorators/public.decorator");
const swagger_examples_1 = require("../../constants/swagger.examples");
let LocalAuthController = class LocalAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login({ username, password }) {
        return this.authService.login({ username, password });
    }
    async role(id) {
        console.log(id);
        return this.authService.getUserRole(id);
    }
};
exports.LocalAuthController = LocalAuthController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'password',
        type: 'string',
        required: true,
        example: 'admin123',
        description: 'The user password for login.'
    }),
    (0, swagger_1.ApiParam)({
        name: 'username',
        type: 'string',
        required: true,
        example: 'admin',
        description: 'The username for login.'
    }),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthDTO]),
    __metadata("design:returntype", Promise)
], LocalAuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user id required to return user role.'
    }),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocalAuthController.prototype, "role", null);
exports.LocalAuthController = LocalAuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth-Local'),
    (0, common_1.Controller)('auth'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], LocalAuthController);
//# sourceMappingURL=local-auth.controller.js.map