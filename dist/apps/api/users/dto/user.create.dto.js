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
exports.UserCreateDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const comment_create_dto_1 = require("../../comments/dto/comment.create.dto");
const roles_1 = require("../../constants/roles");
const post_create_dto_1 = require("../../posts/dto/post.create.dto");
const category_create_dto_1 = require("../../categories/dto/category.create.dto");
const user_status_1 = require("../../constants/user.status");
class UserCreateDTO {
}
exports.UserCreateDTO = UserCreateDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter an username' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter your email' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(8, 40, {
        message: 'Password length Must be between 8 and 40 charcters',
    }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(user_status_1.USER_STATUS),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(roles_1.ROLES),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], UserCreateDTO.prototype, "karma", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "avatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter your name' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid name' }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter your lastname' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid lastname' }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter your age' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserCreateDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter your city' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid city' }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Please enter your country' }),
    (0, class_validator_1.IsString)({ message: 'Please enter a valid country' }),
    __metadata("design:type", String)
], UserCreateDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => post_create_dto_1.PostCreateDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UserCreateDTO.prototype, "posts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => category_create_dto_1.CategoryCreateDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UserCreateDTO.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => comment_create_dto_1.CommentCreateDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UserCreateDTO.prototype, "comments", void 0);
//# sourceMappingURL=user.create.dto.js.map