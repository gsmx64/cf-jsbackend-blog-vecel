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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_paginate_1 = require("nestjs-paginate");
const categories_service_1 = require("../services/categories.service");
const category_create_dto_1 = require("../dto/category.create.dto");
const category_update_dto_1 = require("../dto/category.update.dto");
const local_auth_guard_1 = require("../../auth/guards/local-auth.guard");
const local_auth_roles_guard_1 = require("../../auth/guards/local-auth.roles.guard");
const admin_decorator_1 = require("../../auth/decorators/admin.decorator");
const public_decorator_1 = require("../../auth/decorators/public.decorator");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const categories_search_1 = require("../filters/categories.search");
const categories_filter_1 = require("../filters/categories.filter");
const swagger_examples_1 = require("../../constants/swagger.examples");
const categories_default_1 = require("../filters/categories.default");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async createCategory(body) {
        return this.categoriesService.createCategory(body);
    }
    async updateCategory(id, body) {
        return this.categoriesService.updateCategory(body, id);
    }
    async deleteCategory(id) {
        return this.categoriesService.deleteCategory(id);
    }
    async findOneCategory(id) {
        return this.categoriesService.findOneCategory(id);
    }
    async findAllCategories(query) {
        return this.categoriesService.findAllCategories(query);
    }
    async searchCategories(query) {
        return this.categoriesService.searchCategories(query);
    }
    async filterCategories(query) {
        return this.categoriesService.filterCategories(query);
    }
};
exports.CategoriesController = CategoriesController;
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
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_create_dto_1.CategoryCreateDTO]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createCategory", null);
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
    (0, roles_decorator_1.Roles)('MODERATOR'),
    (0, common_1.Put)('edit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, category_update_dto_1.CategoryUpdateDTO]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateCategory", null);
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
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
__decorate([
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        required: true,
        example: swagger_examples_1.SWAGGER_ID_EXAMPLE,
        description: 'The category uuid to search its data.'
    }),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('view/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findOneCategory", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(category_update_dto_1.CategoryUpdateDTO, categories_default_1.CATEGORIES_DEFAULT_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(categories_default_1.CATEGORIES_DEFAULT_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, public_decorator_1.PublicAccess)(),
    (0, common_1.Get)('list'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "findAllCategories", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(category_update_dto_1.CategoryUpdateDTO, categories_search_1.CATEGORIES_SEARCH_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(categories_search_1.CATEGORIES_SEARCH_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('search'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "searchCategories", null);
__decorate([
    (0, nestjs_paginate_1.ApiOkPaginatedResponse)(category_update_dto_1.CategoryUpdateDTO, categories_filter_1.CATEGORIES_FILTER_CONFIG),
    (0, nestjs_paginate_1.ApiPaginationQuery)(categories_filter_1.CATEGORIES_FILTER_CONFIG),
    (0, swagger_1.ApiBearerAuth)('access_token'),
    (0, admin_decorator_1.AdminAccess)(),
    (0, roles_decorator_1.Roles)('MODERATOR', 'EDITOR', 'BASIC'),
    (0, common_1.Get)('filter'),
    __param(0, (0, nestjs_paginate_1.Paginate)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "filterCategories", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('Categories'),
    (0, common_1.Controller)('categories'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard, local_auth_roles_guard_1.LocalRolesGuard),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map