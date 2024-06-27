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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const comments_service_1 = require("../services/comments.service");
const comment_create_dto_1 = require("../dto/comment.create.dto");
const comment_update_dto_1 = require("../dto/comment.update.dto");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const comments_default_1 = require("../filters/comments.default");
const comments_search_1 = require("../filters/comments.search");
const comments_filter_1 = require("../filters/comments.filter");
const swagger_examples_1 = require("../../constants/swagger.examples");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async createComment(body) {
        return this.commentsService.createComment(body);
    }
    async updateComment(id, body) {
        return this.commentsService.updateComment(body, id);
    }
    async deleteComment(id) {
        return this.commentsService.deleteComment(id);
    }
    async findOneComment(id) {
        return this.commentsService.findOneComment(id);
    }
    async findCommentsByUser(id, query) {
        return this.commentsService.findCommentsByUser(id, query);
    }
    async findAllComments(query) {
        return this.commentsService.findAllComments(query);
    }
    async searchComments(query) {
        return this.commentsService.searchComments(query);
    }
    async filterPosts(query) {
        return this.commentsService.filterComments(query);
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'body',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_COMMENT_BODY_EXAMPLE,
        description: 'The body data to create a comment.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_create_dto_1.CommentCreateDTO]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
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
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_update_dto_1.CommentUpdateDTO]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "updateComment", null);
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
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The comment uuid to search its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "findOneComment", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The user uuid to search his/her comments.'
    }),
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, comments_default_1.COMMENTS_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(comments_default_1.COMMENTS_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "findCommentsByUser", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, comments_filter_1.COMMENTS_FILTER_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(comments_filter_1.COMMENTS_FILTER_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "findAllComments", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, comments_search_1.COMMENTS_SEARCH_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(comments_search_1.COMMENTS_SEARCH_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('search'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "searchComments", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, comments_filter_1.COMMENTS_FILTER_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(comments_filter_1.COMMENTS_FILTER_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('filter'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "filterPosts", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('comments'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
//# sourceMappingURL=comments.controller.js.map