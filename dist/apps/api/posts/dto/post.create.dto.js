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
exports.PostCreateDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const category_create_dto_1 = require("../../categories/dto/category.create.dto");
const user_create_dto_1 = require("../../users/dto/user.create.dto");
const comment_create_dto_1 = require("../../comments/dto/comment.create.dto");
const publish_status_1 = require("../../constants/publish.status");
class PostCreateDTO {
}
exports.PostCreateDTO = PostCreateDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter a title' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid title' }),
    __metadata("design:type", String)
], PostCreateDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter a description' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid description' }),
    __metadata("design:type", String)
], PostCreateDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Please insert a valid image' }),
    __metadata("design:type", String)
], PostCreateDTO.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please write some content' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid content' }),
    __metadata("design:type", String)
], PostCreateDTO.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(publish_status_1.PUBLISH_STATUS),
    __metadata("design:type", String)
], PostCreateDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", user_create_dto_1.UserCreateDTO)
], PostCreateDTO.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", category_create_dto_1.CategoryCreateDTO)
], PostCreateDTO.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => comment_create_dto_1.CommentCreateDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], PostCreateDTO.prototype, "comments", void 0);
//# sourceMappingURL=post.create.dto.js.map