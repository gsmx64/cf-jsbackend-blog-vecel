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
exports.CategoryUpdateDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const post_update_dto_1 = require("../../posts/dto/post.update.dto");
const user_update_dto_1 = require("../../users/dto/user.update.dto");
const publish_status_1 = require("../../constants/publish.status");
class CategoryUpdateDTO {
}
exports.CategoryUpdateDTO = CategoryUpdateDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'Please insert a valid title' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryUpdateDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'Please insert a valid description' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryUpdateDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'Please insert a valid image' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryUpdateDTO.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(publish_status_1.PUBLISH_STATUS),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryUpdateDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", user_update_dto_1.UserUpdateDTO)
], CategoryUpdateDTO.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => post_update_dto_1.PostUpdateDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CategoryUpdateDTO.prototype, "posts", void 0);
//# sourceMappingURL=category.update.dto.js.map