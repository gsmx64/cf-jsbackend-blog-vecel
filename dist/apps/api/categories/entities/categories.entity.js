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
exports.CategoriesEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const posts_entity_1 = require("../../posts/entities/posts.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const publish_status_1 = require("../../constants/publish.status");
let CategoriesEntity = class CategoriesEntity extends base_entity_1.BaseEntity {
};
exports.CategoriesEntity = CategoriesEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 100,
        unique: true
    }),
    __metadata("design:type", String)
], CategoriesEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255
    }),
    __metadata("design:type", String)
], CategoriesEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], CategoriesEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: publish_status_1.PUBLISH_STATUS,
        default: publish_status_1.PUBLISH_STATUS.UNPUBLISHED
    }),
    __metadata("design:type", String)
], CategoriesEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (author) => author.categories),
    __metadata("design:type", users_entity_1.UsersEntity)
], CategoriesEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => posts_entity_1.PostsEntity, (posts) => posts.category),
    __metadata("design:type", Array)
], CategoriesEntity.prototype, "posts", void 0);
exports.CategoriesEntity = CategoriesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'categories' })
], CategoriesEntity);
//# sourceMappingURL=categories.entity.js.map