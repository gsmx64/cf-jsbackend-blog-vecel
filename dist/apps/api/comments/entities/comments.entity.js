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
exports.CommentsEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../config/base.entity");
const users_entity_1 = require("../../users/entities/users.entity");
const posts_entity_1 = require("../../posts/entities/posts.entity");
let CommentsEntity = class CommentsEntity extends base_entity_1.BaseEntity {
};
exports.CommentsEntity = CommentsEntity;
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255
    }),
    __metadata("design:type", String)
], CommentsEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, (author) => author.comments),
    __metadata("design:type", users_entity_1.UsersEntity)
], CommentsEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posts_entity_1.PostsEntity, (post) => post.comments),
    __metadata("design:type", posts_entity_1.PostsEntity)
], CommentsEntity.prototype, "post", void 0);
exports.CommentsEntity = CommentsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'comments' })
], CommentsEntity);
//# sourceMappingURL=comments.entity.js.map