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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../../users/services/users.service");
const categories_service_1 = require("../../categories/services/categories.service");
const posts_service_1 = require("../../posts/services/posts.service");
const comments_service_1 = require("../../comments/services/comments.service");
const search_service_1 = require("../../search/services/search.service");
const settings_service_1 = require("../../settings/services/settings.service");
let AdminService = class AdminService {
    constructor(userService, categoryService, postService, commentService, searchService, settingsService) {
        this.userService = userService;
        this.categoryService = categoryService;
        this.postService = postService;
        this.commentService = commentService;
        this.searchService = searchService;
        this.settingsService = settingsService;
    }
    async updateUser(body, id, request) {
        return await this.userService.updateUser(body, id, request);
    }
    async deleteUser(id) {
        return await this.userService.deleteUser(id);
    }
    async findOneUser(id) {
        return await this.userService.findOneUser(id);
    }
    async findOwnProfile(request) {
        return await this.userService.findOwnProfile(request);
    }
    async findAllUsers(query) {
        return await this.userService.findAllUsers(query);
    }
    async createCategory(body) {
        return await this.categoryService.createCategory(body);
    }
    async updateCategory(body, id) {
        return await this.categoryService.updateCategory(body, id);
    }
    async deleteCategory(id) {
        return await this.categoryService.deleteCategory(id);
    }
    async findOneCategory(id) {
        return await this.categoryService.findOneCategory(id);
    }
    async findAllCategories(query) {
        return await this.categoryService.findAllCategories(query);
    }
    async updatePost(body, id) {
        return await this.postService.updatePost(body, id);
    }
    async deletePost(id) {
        return await this.postService.deletePost(id);
    }
    async findOnePost(id) {
        return await this.postService.findOnePost(id);
    }
    async findPostsByUser(id, query) {
        return await this.postService.findPostsByUser(id, query);
    }
    async findAllPosts(query) {
        return await this.postService.findAllPosts(query);
    }
    async updateComment(body, id) {
        return await this.commentService.updateComment(body, id);
    }
    async deleteComment(id) {
        return await this.commentService.deleteComment(id);
    }
    async findOneComment(id) {
        return await this.commentService.findOneComment(id);
    }
    async findAllComments(query) {
        return await this.commentService.findAllComments(query);
    }
    async searchUsers(query) {
        return await this.searchService.searchUsers(query);
    }
    async searchCategories(query) {
        return await this.searchService.searchCategories(query);
    }
    async searchPosts(query) {
        return await this.searchService.searchPosts(query);
    }
    async searchComments(query) {
        return await this.searchService.searchComments(query);
    }
    async getSettings() {
        return await this.settingsService.getSettings();
    }
    async updateSettings(body) {
        return await this.settingsService.updateSettings(body);
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(users_service_1.UsersService)),
    __param(1, (0, common_1.Inject)(categories_service_1.CategoriesService)),
    __param(2, (0, common_1.Inject)(posts_service_1.PostsService)),
    __param(3, (0, common_1.Inject)(comments_service_1.CommentsService)),
    __param(4, (0, common_1.Inject)(search_service_1.SearchService)),
    __param(5, (0, common_1.Inject)(settings_service_1.SettingsService)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        categories_service_1.CategoriesService,
        posts_service_1.PostsService,
        comments_service_1.CommentsService,
        search_service_1.SearchService,
        settings_service_1.SettingsService])
], AdminService);
//# sourceMappingURL=admin.service.js.map