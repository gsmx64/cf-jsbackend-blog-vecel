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
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_paginate_1 = require("nestjs-paginate");
const swagger_1 = require("@nestjs/swagger");
const search_service_1 = require("../services/search.service");
const user_update_dto_1 = require("../../users/dto/user.update.dto");
const category_update_dto_1 = require("../../categories/dto/category.update.dto");
const post_update_dto_1 = require("../../posts/dto/post.update.dto");
const comment_update_dto_1 = require("../../comments/dto/comment.update.dto");
const search_users_1 = require("../filters/search.users");
const search_categories_1 = require("../filters/search.categories");
const search_posts_1 = require("../filters/search.posts");
const search_comments_1 = require("../filters/search.comments");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    async searchUsers(query) {
        return this.searchService.searchUsers(query);
    }
    async searchCategories(query) {
        return this.searchService.searchCategories(query);
    }
    async searchPosts(query) {
        return this.searchService.searchPosts(query);
    }
    async searchComments(query) {
        return this.searchService.searchComments(query);
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(user_update_dto_1.UserUpdateDTO, search_users_1.SEARCH_USERS_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_users_1.SEARCH_USERS_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Get)('users'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "searchUsers", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(category_update_dto_1.CategoryUpdateDTO, search_categories_1.SEARCH_CATEGORIES_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_categories_1.SEARCH_CATEGORIES_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('categories'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "searchCategories", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(post_update_dto_1.PostUpdateDTO, search_posts_1.SEARCH_POSTS_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_posts_1.SEARCH_POSTS_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('posts'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "searchPosts", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(comment_update_dto_1.CommentUpdateDTO, search_comments_1.SEARCH_COMMENTS_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(search_comments_1.SEARCH_COMMENTS_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Get)('comments'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "searchComments", null);
exports.SearchController = SearchController = __decorate([
    (0, swagger_1.ApiTags)('Search'),
    (0, common_1.Controller)('search'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchController);
//# sourceMappingURL=search.controller.js.map