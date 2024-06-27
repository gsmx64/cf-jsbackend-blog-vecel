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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
const users_entity_1 = require("../../users/entities/users.entity");
const categories_entity_1 = require("../../categories/entities/categories.entity");
const posts_entity_1 = require("../../posts/entities/posts.entity");
const comments_entity_1 = require("../../comments/entities/comments.entity");
const logging_messages_1 = require("../../utils/logging.messages");
const error_manager_1 = require("../../utils/error.manager");
const search_users_1 = require("../filters/search.users");
const search_comments_1 = require("../filters/search.comments");
const users_service_1 = require("../../users/services/users.service");
const search_posts_1 = require("../filters/search.posts");
const search_categories_1 = require("../filters/search.categories");
let SearchService = class SearchService {
    constructor(request, userRepository, categoryRepository, postRepository, commentRepository, userService) {
        this.request = request;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.userService = userService;
        this.dataForLog = this.userService.getUserRoleforLogging(this.request);
    }
    async searchUsers(query) {
        try {
            const queryBuilder = this.userRepository
                .createQueryBuilder('users')
                .where(this.userService.onlyEnabledUsers(this.request))
                .leftJoin('users.posts', 'posts', this.userService.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.updateAt', 'posts.title',
                'posts.description', 'posts.status', 'posts.category'
            ])
                .leftJoin('posts.category', 'posts_category', this.userService.onlyPublished('posts_category', this.request))
                .addSelect([
                'posts_category.id', 'posts_category.updateAt', 'posts_category.title',
                'posts_category.description', 'posts_category.status'
            ])
                .leftJoin('users.comments', 'comments')
                .addSelect([
                'comments.id', 'comments.message', 'comments.post'
            ])
                .leftJoin('comments.post', 'comments_post')
                .addSelect([
                'comments_post.id', 'comments_post.title', 'comments_post.updateAt'
            ]);
            const users = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? search_users_1.SEARCH_USERS_CONFIG_LOW : search_users_1.SEARCH_USERS_CONFIG));
            if (Object.keys(users.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No users found.'
                });
            }
            logging_messages_1.LoggingMessages.log(users, 'SearchService.searchUsers() -> users', this.dataForLog);
            return users;
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
                .leftJoinAndSelect('categories.posts', 'posts');
            const categories = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? search_categories_1.SEARCH_CATEGORIES_CONFIG_LOW : search_categories_1.SEARCH_CATEGORIES_CONFIG));
            if (Object.keys(categories.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No categories found.'
                });
            }
            logging_messages_1.LoggingMessages.log(categories, 'SearchService.searchCategories() -> categories', this.dataForLog);
            return categories;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async searchPosts(query) {
        try {
            const queryBuilder = this.postRepository
                .createQueryBuilder('posts')
                .where(this.userService.onlyPublished('posts', this.request))
                .leftJoinAndSelect('posts.author', 'author')
                .leftJoinAndSelect('posts.category', 'category')
                .leftJoinAndSelect('posts.comments', 'comments');
            const posts = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? search_posts_1.SEARCH_POSTS_CONFIG_LOW : search_posts_1.SEARCH_POSTS_CONFIG));
            if (Object.keys(posts.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No posts found.'
                });
            }
            logging_messages_1.LoggingMessages.log(posts, 'SearchService.searchPosts() -> posts', this.dataForLog);
            return posts;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async searchComments(query) {
        try {
            const queryBuilder = this.commentRepository
                .createQueryBuilder('comments')
                .leftJoinAndSelect('comments.author', 'author')
                .leftJoinAndSelect('comments.post', 'post');
            const comments = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, search_comments_1.SEARCH_COMMENTS_CONFIG);
            if (Object.keys(comments.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No users found.'
                });
            }
            logging_messages_1.LoggingMessages.log(comments, 'SearchService.searchComments() -> comments', this.dataForLog);
            return comments;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(categories_entity_1.CategoriesEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(comments_entity_1.CommentsEntity)),
    __metadata("design:paramtypes", [Request,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService])
], SearchService);
//# sourceMappingURL=search.service.js.map