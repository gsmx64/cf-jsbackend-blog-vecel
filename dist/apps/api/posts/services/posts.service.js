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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
const posts_entity_1 = require("../entities/posts.entity");
const error_manager_1 = require("../../utils/error.manager");
const auth_service_1 = require("../../auth/services/auth.service");
const users_service_1 = require("../../users/services/users.service");
const logging_messages_1 = require("../../utils/logging.messages");
const posts_default_1 = require("../filters/posts.default");
const posts_filter_1 = require("../filters/posts.filter");
const posts_search_1 = require("../filters/posts.search");
let PostsService = class PostsService {
    constructor(request, postRepository, authService, userService) {
        this.request = request;
        this.postRepository = postRepository;
        this.authService = authService;
        this.userService = userService;
        this.dataForLog = this.userService.getUserRoleforLogging(this.request);
    }
    async createPost(body) {
        try {
            const authorOverride = this.authService.getUserId(this.request);
            const statusOverride = 'UNPUBLISHED';
            body = { ...body,
                status: statusOverride,
                author: await authorOverride,
            };
            const post = await this.postRepository
                .save(body);
            if (!post) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while creating the post.'
                });
            }
            logging_messages_1.LoggingMessages.log(post, 'PostsService.createPost(body) -> post', this.dataForLog);
            return post;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async updatePost(body, id) {
        try {
            const post = await this.postRepository.update(id, body);
            if (post.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while updating the post.'
                });
            }
            logging_messages_1.LoggingMessages.log(post, 'PostsService.updatePost(body, id) -> post', this.dataForLog);
            return post;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async deletePost(id) {
        try {
            const post = await this.postRepository.delete(id);
            if (post.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while deleting the post.'
                });
            }
            logging_messages_1.LoggingMessages.log(post, 'PostsService.deletePost(id) -> post', this.dataForLog);
            return post;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findOnePost(id) {
        try {
            const post = await this.postRepository
                .createQueryBuilder('post')
                .where({ id })
                .andWhere(this.userService.onlyPublished('post', this.request))
                .leftJoinAndSelect('post.author', 'author')
                .leftJoinAndSelect('post.category', 'category')
                .leftJoinAndSelect('post.comments', 'comments')
                .leftJoin('comments.author', 'comment_author')
                .addSelect(['comment_author.id', 'comment_author.username', 'comment_author.avatar'])
                .orderBy('comments.created_at', 'DESC')
                .getOne();
            if (!post) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Post not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(post, 'PostsService.findOnePost(id) -> post', this.dataForLog);
            return post;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findPostsByUser(id, query) {
        try {
            const queryBuilder = this.postRepository
                .createQueryBuilder('posts')
                .where('posts.author = :userId', { userId: id })
                .andWhere(this.userService.onlyPublished('posts', this.request))
                .leftJoinAndSelect('posts.author', 'author')
                .leftJoinAndSelect('posts.category', 'category')
                .leftJoinAndSelect('posts.comments', 'comments');
            const posts = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ?
                posts_default_1.POSTS_DEFAULT_CONFIG_LOW
                : posts_default_1.POSTS_DEFAULT_CONFIG));
            if (Object.keys(posts.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Post not found for this user.'
                });
            }
            logging_messages_1.LoggingMessages.log(posts, 'PostsService.findAllPosts() -> posts', this.dataForLog);
            return posts;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findAllPosts(query) {
        try {
            const queryBuilder = this.postRepository
                .createQueryBuilder('posts')
                .where(this.userService.onlyPublished('posts', this.request))
                .leftJoinAndSelect('posts.author', 'author')
                .leftJoinAndSelect('posts.category', 'category')
                .leftJoinAndSelect('posts.comments', 'comments');
            const posts = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ?
                posts_default_1.POSTS_DEFAULT_CONFIG_LOW
                : posts_default_1.POSTS_DEFAULT_CONFIG));
            if (Object.keys(posts.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Posts not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(posts, 'PostsService.findAllPosts() -> posts', this.dataForLog);
            return posts;
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
            const posts = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? posts_search_1.POSTS_SEARCH_CONFIG_LOW : posts_search_1.POSTS_SEARCH_CONFIG));
            if (Object.keys(posts.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Posts not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(posts, 'PostsService.searchPosts() -> posts', this.dataForLog);
            return posts;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async filterPosts(query) {
        try {
            const queryBuilder = this.postRepository
                .createQueryBuilder('posts')
                .where(this.userService.onlyPublished('posts', this.request))
                .leftJoinAndSelect('posts.author', 'author')
                .leftJoinAndSelect('posts.category', 'category')
                .leftJoinAndSelect('posts.comments', 'comments');
            const posts = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.userService.isRoleBasic(this.request) ? posts_filter_1.POSTS_FILTER_CONFIG_LOW : posts_filter_1.POSTS_FILTER_CONFIG));
            if (Object.keys(posts.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Posts not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(posts, 'PostsService.filterPosts() -> posts', this.dataForLog);
            return posts;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_2.InjectRepository)(posts_entity_1.PostsEntity)),
    __metadata("design:paramtypes", [Request,
        typeorm_1.Repository,
        auth_service_1.AuthService,
        users_service_1.UsersService])
], PostsService);
//# sourceMappingURL=posts.service.js.map