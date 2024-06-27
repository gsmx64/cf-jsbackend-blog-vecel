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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const users_service_1 = require("../services/users.service");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
const user_create_dto_1 = require("../dto/user.create.dto");
const user_update_dto_1 = require("../dto/user.update.dto");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const users_search_1 = require("../filters/users.search");
const users_filter_1 = require("../filters/users.filter");
const swagger_examples_1 = require("../../constants/swagger.examples");
const users_default_1 = require("../filters/users.default");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async registerUser(body) {
        return this.usersService.createUser(body);
    }
    async usernameExist(username) {
        return this.usersService.usernameExist(username);
    }
    async emailExist(email) {
        return this.usersService.emailExist(email);
    }
    async updateUser(id, body, request) {
        return this.usersService.updateUser(body, id, request);
    }
    async updateUserPassword(id, body, request) {
        return this.usersService.updateUserPassword(body, id, request);
    }
    async deleteUser(id) {
        return this.usersService.deleteUser(id);
    }
    async findOneUser(id) {
        return this.usersService.findOneUser(id);
    }
    async findOwnProfile(request) {
        return this.usersService.findOwnProfile(request);
    }
    async findAllUsers(query) {
        return this.usersService.findAllUsers(query);
    }
    async searchUsers(query) {
        return this.usersService.searchUsers(query);
    }
    async filterUsers(query) {
        return this.usersService.filterUsers(query);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'body',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_USER_BODY_EXAMPLE,
        description: 'The body data to create a user.'
    }),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.UserCreateDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registerUser", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'username',
        type: 'string',
        required: true,
        example: 'tester',
        description: 'The username to validate if exists in users database.'
    }),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('verify/username/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "usernameExist", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'email',
        type: 'string',
        required: true,
        example: 'email@domain.com',
        description: 'The email to validate if exists in users database.'
    }),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('verify/email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "emailExist", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to edit their data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_dto_1.UserUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to edit their password.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Put)('password/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserPassword", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to delete their data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        description: 'The user uuid to search their data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOwnProfile", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(user_update_dto_1.UserUpdateDTO, users_default_1.USERS_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(users_default_1.USERS_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Get)('list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(user_update_dto_1.UserUpdateDTO, users_search_1.USERS_SEARCH_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(users_search_1.USERS_SEARCH_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('search'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "searchUsers", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(user_update_dto_1.UserUpdateDTO, users_filter_1.USERS_FILTER_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(users_filter_1.USERS_FILTER_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('filter'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "filterUsers", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map