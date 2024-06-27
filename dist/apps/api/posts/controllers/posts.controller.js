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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const posts_service_1 = require("../services/posts.service");
const post_create_dto_1 = require("../dto/post.create.dto");
const post_update_dto_1 = require("../dto/post.update.dto");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const posts_filter_1 = require("../filters/posts.filter");
const posts_search_1 = require("../filters/posts.search");
const swagger_examples_1 = require("../../constants/swagger.examples");
const posts_default_1 = require("../filters/posts.default");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    async createPost(body) {
        return this.postsService.createPost(body);
    }
    async updatePost(id, body) {
        return this.postsService.updatePost(body, id);
    }
    async deletePost(id) {
        return this.postsService.deletePost(id);
    }
    async findOnePost(id) {
        return this.postsService.findOnePost(id);
    }
    async findPostsByUser(id, query) {
        return this.postsService.findPostsByUser(id, query);
    }
    async findAllPosts(query) {
        return this.postsService.findAllPosts(query);
    }
    async searchPosts(query) {
        return this.postsService.searchPosts(query);
    }
    async filterPosts(query) {
        return this.postsService.filterPosts(query);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'body',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_POST_BODY_EXAMPLE,
        description: 'The body data to create a post.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_create_dto_1.PostCreateDTO]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
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
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR'),
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, post_update_dto_1.PostUpdateDTO]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
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
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePost", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The post uuid to search its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findOnePost", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to search his/her posts.'
    }),
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, posts_default_1.POSTS_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(posts_default_1.POSTS_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findPostsByUser", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, posts_default_1.POSTS_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(posts_default_1.POSTS_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAllPosts", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, posts_search_1.POSTS_SEARCH_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(posts_search_1.POSTS_SEARCH_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('search'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "searchPosts", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, posts_filter_1.POSTS_FILTER_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(posts_filter_1.POSTS_FILTER_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('filter'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "filterPosts", null);
exports.PostsController = PostsController = __decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Controller)('posts'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map