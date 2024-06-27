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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const user_update_dto_1 = require("../../users/dto/user.update.dto");
const category_create_dto_1 = require("../../categories/dto/category.create.dto");
const category_update_dto_1 = require("../../categories/dto/category.update.dto");
const post_update_dto_1 = require("../../posts/dto/post.update.dto");
const comment_update_dto_1 = require("../../comments/dto/comment.update.dto");
const admin_service_1 = require("../services/admin.service");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const search_users_1 = require("../../search/filters/search.users");
const search_categories_1 = require("../../search/filters/search.categories");
const search_posts_1 = require("../../search/filters/search.posts");
const search_comments_1 = require("../../search/filters/search.comments");
const swagger_examples_1 = require("../../constants/swagger.examples");
const posts_default_1 = require("../../posts/filters/posts.default");
const users_default_1 = require("../../users/filters/users.default");
const categories_default_1 = require("../../categories/filters/categories.default");
const comments_filter_1 = require("../../comments/filters/comments.filter");
const settings_update_dto_1 = require("../../settings/dto/settings.update.dto");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async updateUser(id, body, request) {
        return this.adminService.updateUser(body, id, request);
    }
    async deleteUser(id) {
        return this.adminService.deleteUser(id);
    }
    async findOneUser(id) {
        return this.adminService.findOneUser(id);
    }
    async findOwnProfile(request) {
        return this.adminService.findOwnProfile(request);
    }
    async findAllUsers(query) {
        return this.adminService.findAllUsers(query);
    }
    async createCategory(body) {
        return this.adminService.createCategory(body);
    }
    async updateCategory(id, body) {
        return this.adminService.updateCategory(body, id);
    }
    async deleteCategory(id) {
        return this.adminService.deleteCategory(id);
    }
    async findOneCategory(id) {
        return this.adminService.findOneCategory(id);
    }
    async findAllCategories(query) {
        return this.adminService.findAllCategories(query);
    }
    async updatePost(id, body) {
        return this.adminService.updatePost(body, id);
    }
    async deletePost(id) {
        return this.adminService.deletePost(id);
    }
    async findOnePost(id) {
        return this.adminService.findOnePost(id);
    }
    async findAllPosts(query) {
        return this.adminService.findAllPosts(query);
    }
    async updateComment(id, body) {
        return this.adminService.updateComment(body, id);
    }
    async deleteComment(id) {
        return this.adminService.deleteComment(id);
    }
    async findOneComment(id) {
        return this.adminService.findOneComment(id);
    }
    async findAllComments(query) {
        return this.adminService.findAllComments(query);
    }
    async searchUsers(query) {
        return this.adminService.searchUsers(query);
    }
    async searchCategories(query) {
        return this.adminService.searchCategories(query);
    }
    async searchPosts(query) {
        return this.adminService.searchPosts(query);
    }
    async searchComments(query) {
        return this.adminService.searchComments(query);
    }
    async getSettings() {
        return this.adminService.getSettings();
    }
    async updateSettings(body) {
        return this.adminService.updateSettings(body);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to edit their data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Put)('users/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_dto_1.UserUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateUser", null);
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
    (0, common_1.Delete)('users/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteUser", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to search their data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('users/view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOneUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('users/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOwnProfile", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(user_update_dto_1.UserUpdateDTO, users_default_1.USERS_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(users_default_1.USERS_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('users/list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAllUsers", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'body',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_CATEGORY_BODY_EXAMPLE,
        description: 'The body data to create a category.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Post)('categories/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_create_dto_1.CategoryCreateDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The category uuid to edit its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Put)('categories/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, category_update_dto_1.CategoryUpdateDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateCategory", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The category uuid to delete its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Delete)('categories/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteCategory", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The category uuid to search its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('categories/view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOneCategory", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(category_update_dto_1.CategoryUpdateDTO, categories_default_1.CATEGORIES_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(categories_default_1.CATEGORIES_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('categories/list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAllCategories", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The post uuid to edit its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Put)('posts/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, post_update_dto_1.PostUpdateDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updatePost", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The post uuid to delete its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Delete)('posts/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deletePost", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The post uuid to search its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('posts/view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOnePost", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, posts_default_1.POSTS_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(posts_default_1.POSTS_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('posts/list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAllPosts", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The comment uuid to edit its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Put)('comments/edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_update_dto_1.CommentUpdateDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateComment", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The comment uuid to delete its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Delete)('comments/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deleteComment", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The comment uuid to search its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('comments/view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOneComment", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, comments_filter_1.COMMENTS_FILTER_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(comments_filter_1.COMMENTS_FILTER_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('comments/list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAllComments", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(user_update_dto_1.UserUpdateDTO, search_users_1.SEARCH_USERS_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_users_1.SEARCH_USERS_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('search/users'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "searchUsers", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(category_update_dto_1.CategoryUpdateDTO, search_categories_1.SEARCH_CATEGORIES_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_categories_1.SEARCH_CATEGORIES_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('search/categories'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "searchCategories", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, search_posts_1.SEARCH_POSTS_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_posts_1.SEARCH_POSTS_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('search/posts'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "searchPosts", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, search_comments_1.SEARCH_COMMENTS_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_comments_1.SEARCH_COMMENTS_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('search/comments'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "searchComments", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Get)('settings/view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getSettings", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, common_1.Put)('settings/edit'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [settings_update_dto_1.SettingsUpdateDTO]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateSettings", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map