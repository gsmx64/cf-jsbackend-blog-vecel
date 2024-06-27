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
exports.GoogleOauthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const google_oauth_guard_1 = require("../guards/google-oauth.guard");
const auth_service_1 = require("../services/auth.service");
let GoogleOauthController = class GoogleOauthController {
    constructor(authService) {
        this.authService = authService;
    }
    async googleAuth(_req) {
    }
    async googleAuthRedirect(req, res) {
        return req.user;
    }
};
exports.GoogleOauthController = GoogleOauthController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleOauthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('redirect'),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GoogleOauthController.prototype, "googleAuthRedirect", null);
exports.GoogleOauthController = GoogleOauthController = __decorate([
    (0, swagger_1.ApiTags)('Auth-Google'),
    (0, common_1.Controller)('auth/google'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], GoogleOauthController);
//# sourceMappingURL=google-oauth.controller.js.map