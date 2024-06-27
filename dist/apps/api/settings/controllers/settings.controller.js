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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const settings_service_1 = require("../services/settings.service");
const settings_update_dto_1 = require("../dto/settings.update.dto");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
let SettingsController = class SettingsController {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    async updateSettings(body) {
        return this.settingsService.updateSettings(body);
    }
    async getSettings() {
        return this.settingsService.getSettings();
    }
    async loadSampleData(sample) {
        return this.settingsService.loadSampleData(sample);
    }
};
exports.SettingsController = SettingsController;
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Put)('edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_update_dto_1.SettingsUpdateDTO]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "updateSettings", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getSettings", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Post)('sampledata'),
    __param(0, (0, common_1.Param)('sample')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "loadSampleData", null);
exports.SettingsController = SettingsController = __decorate([
    (0, swagger_1.ApiTags)('Settings'),
    (0, common_1.Controller)('settings'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsController);
//# sourceMappingURL=settings.controller.js.map