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
exports.SettingsEntity = void 0;
const typeorm_1 = require("typeorm");
let SettingsEntity = class SettingsEntity {
};
exports.SettingsEntity = SettingsEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], SettingsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        name: 'updated_at'
    }),
    __metadata("design:type", Date)
], SettingsEntity.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 10,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "activation", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "terms", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "instagram", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "twitterx", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "linkedin", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "youtube", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: true
    }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "tiktok", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        width: 1,
        nullable: true
    }),
    __metadata("design:type", Number)
], SettingsEntity.prototype, "setup", void 0);
exports.SettingsEntity = SettingsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'settings' })
], SettingsEntity);
//# sourceMappingURL=settings.entity.js.map