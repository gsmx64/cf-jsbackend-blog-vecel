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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
const categories_entity_1 = require("../entities/categories.entity");
const error_manager_1 = require("../../utils/error.manager");
const auth_service_1 = require("../../auth/services/auth.service");
const users_service_1 = require("../../users/services/users.service");
const logging_messages_1 = require("../../utils/logging.messages");
const categories_filter_1 = require("../filters/categories.filter");
const categories_search_1 = require("../filters/categories.search");
const categories_default_1 = require("../filters/categories.default");
let CategoriesService = class CategoriesService {
    constructor(request, categoryRepository, authService, userService) {
        this.request = request;
        this.categoryRepository = categoryRepository;
        this.authService = authService;
        this.userService = userService;
        this.dataForLog = this.userService.getUserRoleforLogging(this.request);
    }
    async createCategory(body) {
        try {
            const authorOverride = this.authService.getUserId(this.request);
            const statusOverride = 'UNPUBLISHED';
            body = { ...body,
                status: statusOverride,
                author: await authorOverride,
            };
            const category = await this.categoryRepository
                .save(body);
            if (!category) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while creating the category.'
                });
            }
            logging_messages_1.LoggingMessages.log(category, 'CategoriesService.createCategory(body) -> category', this.dataForLog);
            return category;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async updateCategory(body, id) {
        try {
            const category = await this.categoryRepository.update(id, body);
            if (category.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'No changes made while updating the category.'
                });
            }
            logging_messages_1.LoggingMessages.log(category, 'CategoriesService.updateCategory(body, id) -> category', this.dataForLog);
            return category;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async deleteCategory(id) {
        try {
            const category = await this.categoryRepository.delete(id);
            if (category.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while deleting the category.'
                });
            }
            logging_messages_1.LoggingMessages.log(category, 'CategoriesService.deleteCategory(id) -> category', this.dataForLog);
            return category;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findOneCategory(id) {
        try {
            const category = await this.categoryRepository
                .createQueryBuilder('category')
                .where({ id })
                .andWhere(this.userService.onlyPublished('category', this.request))
                .leftJoinAndSelect('category.author', 'author')
                .addSelect([
                'author.id', 'author.updateAt', 'author.username', 'author.email',
                'author.status', 'author.role', 'author.karma', 'author.avatar',
                'author.firstName', 'author.lastName', 'author.age', 'author.city',
                'author.country'
            ])
                .leftJoin('category.posts', 'posts')
                .addSelect([
                'posts.id', 'posts.title', 'posts.description', 'posts.image',
                'posts.author', 'posts.status', 'posts.updateAt'
            ])
                .leftJoin('posts.author', 'posts_author', this.userService.onlyPublished('posts', this.request))
                .addSelect([
                'posts_author.id', 'posts_author.username', 'posts_author.status'
            ])
                .orderBy('category.created_at', 'DESC')
                .getOne();
            if (!category) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Category not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(category, 'CategoriesService.findOneCategory(id) -> category', this.dataForLog);
            return category;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findAllCategories(query) {
        try {
            const queryBuilder = this.categoryRepository
                .createQueryBuilder('categories')
                .where(this.userService.onlyPublished('categories', this.request))
                .leftJoin('categories.author', 'author')
                .addSelect([
                'author.id', 'author.updateAt', 'author.username', 'author.email',
                'author.status', 'author.role', 'author.karma', 'author.avatar',
                'author.firstName', 'author.lastName', 'author.age', 'author.city',
                'author.country'
            ])
                .leftJoin('categories.posts', 'posts', this.userService.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.title', 'posts.description', 'posts.updateAt'
            ]);
            const categories = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ?
                categories_default_1.CATEGORIES_DEFAULT_CONFIG_LOW
                : categories_default_1.CATEGORIES_DEFAULT_CONFIG));
            if (Object.keys(categories.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Categories not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(categories, 'CategoriesService.findAllCategories() -> categories', this.dataForLog);
            return categories;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async searchCategories(query) {
        try {
            const queryBuilder = this.categoryRepository
                .createQueryBuilder('categories')
                .where(this.userService.onlyPublished('categories', this.request))
                .leftJoinAndSelect('categories.author', 'author')
                .leftJoinAndSelect('categories.posts', 'posts')
                .leftJoinAndSelect('posts.author', 'posts_author');
            const categories = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? categories_search_1.CATEGORIES_SEARCH_CONFIG_LOW : categories_search_1.CATEGORIES_SEARCH_CONFIG));
            if (Object.keys(categories.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Categories not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(categories, 'CategoriesService.searchCategories() -> categories', this.dataForLog);
            return categories;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async filterCategories(query) {
        try {
            const queryBuilder = this.categoryRepository
                .createQueryBuilder('categories')
                .where(this.userService.onlyPublished('categories', this.request))
                .leftJoinAndSelect('categories.author', 'author')
                .leftJoinAndSelect('categories.posts', 'posts')
                .leftJoinAndSelect('posts.author', 'posts_author');
            const categories = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? categories_filter_1.CATEGORIES_FILTER_CONFIG_LOW : categories_filter_1.CATEGORIES_FILTER_CONFIG));
            if (Object.keys(categories.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Categories not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(categories, 'CategoriesService.filterCategories() -> categories', this.dataForLog);
            return categories;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_2.InjectRepository)(categories_entity_1.CategoriesEntity)),
    __metadata("design:paramtypes", [Request,
        typeorm_1.Repository,
        auth_service_1.AuthService,
        users_service_1.UsersService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map