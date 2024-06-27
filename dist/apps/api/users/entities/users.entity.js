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
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const roles_1 = require("../../constants/roles");
const base_entity_1 = require("../../config/base.entity");
const comments_entity_1 = require("../../comments/entities/comments.entity");
const posts_entity_1 = require("../../posts/entities/posts.entity");
const categories_entity_1 = require("../../categories/entities/categories.entity");
const user_status_1 = require("../../constants/user.status");
let UsersEntity = class UsersEntity extends base_entity_1.BaseEntity {
};
exports.UsersEntity = UsersEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 20,
        unique: true
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 254,
        unique: true
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 40
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: user_status_1.USER_STATUS,
        default: user_status_1.USER_STATUS.PENDING
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: roles_1.ROLES,
        default: roles_1.ROLES.BASIC
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        width: 5
    }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "karma", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 40
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 40
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        width: 2
    }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 40
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 40
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => posts_entity_1.PostsEntity, (posts) => posts.author),
    __metadata("design:type", Array)
], UsersEntity.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => categories_entity_1.CategoriesEntity, (categories) => categories.author),
    __metadata("design:type", Array)
], UsersEntity.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.CommentsEntity, (comments) => comments.author),
    __metadata("design:type", Array)
], UsersEntity.prototype, "comments", void 0);
exports.UsersEntity = UsersEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UsersEntity);
//# sourceMappingURL=users.entity.js.map