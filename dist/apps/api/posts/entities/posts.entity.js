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
exports.PostsEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const categories_entity_1 = require("../../categories/entities/categories.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const comments_entity_1 = require("../../comments/entities/comments.entity");
const publish_status_1 = require("../../constants/publish.status");
let PostsEntity = class PostsEntity extends base_entity_1.BaseEntity {
};
exports.PostsEntity = PostsEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 100,
        unique: true
    }),
    __metadata("design:type", String)
], PostsEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], PostsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], PostsEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], PostsEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: publish_status_1.PUBLISH_STATUS,
        default: publish_status_1.PUBLISH_STATUS.UNPUBLISHED
    }),
    __metadata("design:type", String)
], PostsEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (author) => author.posts),
    __metadata("design:type", users_entity_1.UsersEntity)
], PostsEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.CategoriesEntity, (category) => category.posts),
    __metadata("design:type", categories_entity_1.CategoriesEntity)
], PostsEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.CommentsEntity, (comments) => comments.post),
    __metadata("design:type", Array)
], PostsEntity.prototype, "comments", void 0);
exports.PostsEntity = PostsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'posts' })
], PostsEntity);
//# sourceMappingURL=posts.entity.js.map