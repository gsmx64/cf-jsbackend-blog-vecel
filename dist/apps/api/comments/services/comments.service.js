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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const nestjs_paginate_1 = require("nestjs-paginate");
const comments_entity_1 = require("../entities/comments.entity");
const error_manager_1 = require("../../utils/error.manager");
const auth_service_1 = require("../../auth/services/auth.service");
const users_service_1 = require("../../users/services/users.service");
const logging_messages_1 = require("../../utils/logging.messages");
const comments_filter_1 = require("../filters/comments.filter");
const comments_search_1 = require("../filters/comments.search");
const comments_default_1 = require("../filters/comments.default");
let CommentsService = class CommentsService {
    constructor(request, commentRepository, authService, userService) {
        this.request = request;
        this.commentRepository = commentRepository;
        this.authService = authService;
        this.userService = userService;
        this.dataForLog = this.userService.getUserRoleforLogging(this.request);
    }
    async createComment(body) {
        try {
            const authorOverride = this.authService.getUserId(this.request);
            body = { ...body,
                author: await authorOverride,
            };
            const comment = await this.commentRepository.save(body);
            if (!comment) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while creating the comment.'
                });
            }
            logging_messages_1.LoggingMessages.log(comment, 'CommentsService.createComment(body) -> comment', this.dataForLog);
            return comment;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async updateComment(body, id) {
        try {
            const comment = await this.commentRepository.update(id, body);
            if (comment.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'No changes made while updating the comment.'
                });
            }
            logging_messages_1.LoggingMessages.log(comment, 'CommentsService.updateComment(body, id) -> comment', this.dataForLog);
            return comment;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async deleteComment(id) {
        try {
            const comment = await this.commentRepository.delete(id);
            if (comment.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while deleting the comment.'
                });
            }
            logging_messages_1.LoggingMessages.log(comment, 'CommentsService.deleteComment(id) -> comment', this.dataForLog);
            return comment;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findOneComment(id) {
        try {
            const comment = await this.commentRepository
                .createQueryBuilder('comment')
                .where({ id })
                .leftJoin('comment.author', 'author')
                .addSelect([
                'author.id', 'author.updateAt', 'author.username', 'author.email',
                'author.status', 'author.role', 'author.karma', 'author.avatar',
                'author.firstName', 'author.lastName', 'author.age', 'author.city',
                'author.country'
            ])
                .leftJoin('comment.post', 'post', this.userService.onlyPublished('post', this.request))
                .addSelect([
                'post.id', 'post.title', 'post.description', 'post.updateAt'
            ])
                .orderBy('comment.updateAt', 'DESC')
                .getOne();
            if (!comment) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Comment not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(comment, 'CommentsService.findOneComment(id) -> comment', this.dataForLog);
            return comment;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findCommentsByUser(id, query) {
        try {
            const queryBuilder = this.commentRepository
                .createQueryBuilder('comments')
                .where('comments.author = :userId', { userId: id })
                .leftJoin('comments.post', 'post', this.userService.onlyPublished('post', this.request))
                .addSelect([
                'post.id', 'post.title', 'post.description', 'post.updateAt'
            ]);
            const comments = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, comments_default_1.COMMENTS_DEFAULT_CONFIG);
            if (Object.keys(comments.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Comments not found for this user.'
                });
            }
            logging_messages_1.LoggingMessages.log(comments, 'CommentsService.findCommentsByUser() -> comments', this.dataForLog);
            return comments;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findAllComments(query) {
        try {
            const queryBuilder = this.commentRepository
                .createQueryBuilder('comments')
                .leftJoin('comments.author', 'author')
                .addSelect([
                'author.id', 'author.updateAt', 'author.username', 'author.email',
                'author.status', 'author.role', 'author.karma', 'author.avatar',
                'author.firstName', 'author.lastName', 'author.age', 'author.city',
                'author.country'
            ])
                .leftJoin('comments.post', 'post', this.userService.onlyPublished('post', this.request))
                .addSelect([
                'post.id', 'post.title', 'post.description', 'post.updateAt'
            ]);
            const comments = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, comments_default_1.COMMENTS_DEFAULT_CONFIG);
            if (Object.keys(comments.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Comment not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(comments, 'CommentsService.findAllComments() -> comments', this.dataForLog);
            return comments;
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
            const comments = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, comments_search_1.COMMENTS_SEARCH_CONFIG);
            if (Object.keys(comments.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Comments not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(comments, 'CommentsService.searchComments() -> comments', this.dataForLog);
            return comments;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async filterComments(query) {
        try {
            const queryBuilder = this.commentRepository
                .createQueryBuilder('comments')
                .leftJoinAndSelect('comments.author', 'author')
                .leftJoinAndSelect('comments.post', 'post');
            const comments = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, comments_filter_1.COMMENTS_FILTER_CONFIG);
            if (Object.keys(comments.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Comments not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(comments, 'CommentsService.filterComments() -> comments', this.dataForLog);
            return comments;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_2.InjectRepository)(comments_entity_1.CommentsEntity)),
    __metadata("design:paramtypes", [Request,
        typeorm_1.Repository,
        auth_service_1.AuthService,
        users_service_1.UsersService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map