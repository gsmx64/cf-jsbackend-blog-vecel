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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const nestjs_paginate_1 = require("nestjs-paginate");
const users_entity_1 = require("../entities/users.entity");
const settings_entity_1 = require("../../settings/entities/settings.entity");
const error_manager_1 = require("../../utils/error.manager");
const use_token_1 = require("../../utils/use.token");
const user_status_1 = require("../../constants/user.status");
const roles_1 = require("../../constants/roles");
const publish_status_1 = require("../../constants/publish.status");
const validations_1 = require("../../constants/validations");
const logging_messages_1 = require("../../utils/logging.messages");
const users_filter_1 = require("../filters/users.filter");
const users_search_1 = require("../filters/users.search");
const users_default_1 = require("../filters/users.default");
let UsersService = class UsersService {
    constructor(request, userRepository, settingsRepository) {
        this.request = request;
        this.userRepository = userRepository;
        this.settingsRepository = settingsRepository;
        this.dataForLog = this.getUserRoleforLogging(this.request);
    }
    onlyPublished(alias = 'posts', request) {
        try {
            const currentToken = request.headers['access_token'];
            const manageToken = (0, use_token_1.useToken)(currentToken);
            const currentUserRole = manageToken.role;
            return ((this.isRoleBasic(request)) ?
                `${alias}.status = '${publish_status_1.PUBLISH_STATUS.PUBLISHED}'` :
                `${alias}.description != 'fake-query'`);
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    onlyEnabledUsers(request) {
        try {
            return ((this.isRoleBasic(request)) ?
                `users.status = '${user_status_1.USER_STATUS.ENABLED}'` :
                `users.lastName != 'fake-query'`);
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    isRoleBasic(request) {
        try {
            const currentToken = request.headers['access_token'];
            const manageToken = (0, use_token_1.useToken)(currentToken);
            return (request.headers['access_token'] == '')
                ? true
                : (manageToken.role == roles_1.ROLES.BASIC);
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    getUserRoleforLogging(request) {
        try {
            const currentToken = request.headers['access_token'];
            const manageToken = (0, use_token_1.useToken)(currentToken);
            const user = (manageToken != null) || (manageToken != undefined) ? manageToken.sub : 'Undefined';
            const role = (manageToken != null) || (manageToken != undefined) ? manageToken.role : 'Undefined';
            return { user, role };
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async createUser(body) {
        try {
            const settings = await this.settingsRepository
                .createQueryBuilder('settings')
                .where('settings.id = :Id', { Id: 1 })
                .getOne();
            const statusOverride = ((settings?.setup !== 0) || (settings?.activation === 'auto')) ? 'ENABLED' : 'PENDING';
            const roleOverride = (settings.setup !== 0) ? 'ADMIN' : 'BASIC';
            const hashedPassword = await bcrypt.hash(body.password, Number(process.env.APP_AUTH_HASH_SALT));
            const user = await this.userRepository.save({ ...body,
                status: statusOverride,
                role: roleOverride,
                karma: body.karma ? body.karma : 0,
                password: hashedPassword
            });
            if (!user) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while creating the user.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.createUser(body) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async updateUser(body, id, request) {
        try {
            const hashedPassword = (body?.password != undefined) ? await bcrypt.hash(body?.password, Number(process.env.APP_AUTH_HASH_SALT)) : '';
            const user = (body?.password != undefined) ?
                await this.userRepository.update(id, { ...body, password: hashedPassword }) : await this.userRepository.update(id, body);
            if (user.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'No changes made while updating the user.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.updateUser(body, id) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async updateUserPassword(body, id, request) {
        try {
            const userExists = await this.findPasswordById(id);
            if (!userExists) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'User not found!',
                });
            }
            const isCurrentPasswordCorrect = await bcrypt.compare(body.current_password, userExists.password);
            if (!isCurrentPasswordCorrect) {
                throw new error_manager_1.ErrorManager({
                    type: 'UNAUTHORIZED',
                    message: 'Incorrect current password.',
                });
            }
            const hashedPassword = await bcrypt.hash(body.password, Number(process.env.APP_AUTH_HASH_SALT));
            const user = await this.userRepository.update(id, { password: hashedPassword });
            if (user.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'No changes made while updating the user.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.updateUser(body, id) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async deleteUser(id) {
        try {
            const user = await this.userRepository.delete(id);
            if (user.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while deleting the user.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.deleteUser(id) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findLoginBy({ key, value }) {
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .addSelect('user.password')
                .where({ [key]: value })
                .getOne();
            logging_messages_1.LoggingMessages.log(user, 'UsersService.findLoginBy({key, value}) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findPasswordById(id) {
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .select(['user.password'])
                .where({ id })
                .getOne();
            logging_messages_1.LoggingMessages.log(user, 'UsersService.findPasswordById(id) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async usernameExist(username) {
        try {
            if (username.match(validations_1.VALID_USERNAME_REGEX)) {
                const response = await this.userRepository
                    .createQueryBuilder('user')
                    .select(['user.username'])
                    .where("LOWER(user.username) like :userUsername", { userUsername: `%${username.toLowerCase()}%` })
                    .getOne();
                logging_messages_1.LoggingMessages.log(response, 'UsersService.usernameExist(username) -> response', this.dataForLog);
                return response ? true : false;
            }
            return false;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async emailExist(email) {
        try {
            if (email.match(validations_1.VALID_EMAIL_REGEX)) {
                const response = await this.userRepository
                    .createQueryBuilder('user')
                    .select(['user.email'])
                    .where("LOWER(user.email) like :userEmail", { userEmail: `%${email.toLowerCase()}%` })
                    .getOne();
                logging_messages_1.LoggingMessages.log(response, 'UsersService.emailExist(email) -> response', this.dataForLog);
                return response ? true : false;
            }
            return false;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findIdRoleOnly(id) {
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .select(['user.id', 'user.role'])
                .where({ id })
                .getOne();
            if (!user) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'User not found by Id.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.findIdRoleOnly(id) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findOneUser(id) {
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .where({ id })
                .leftJoin('user.posts', 'posts', this.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.updateAt', 'posts.title',
                'posts.description', 'posts.status', 'posts.category'
            ])
                .leftJoin('posts.category', 'posts_category', this.onlyPublished('posts_category', this.request))
                .addSelect([
                'posts_category.id', 'posts_category.updateAt', 'posts_category.title',
                'posts_category.description', 'posts_category.status'
            ])
                .leftJoin('user.comments', 'comments')
                .addSelect([
                'comments.id', 'comments.message', 'comments.post'
            ])
                .leftJoin('comments.post', 'comments_post')
                .addSelect([
                'comments_post.id', 'comments_post.title', 'comments_post.updateAt'
            ])
                .orderBy('user.created_at', 'DESC')
                .getOne();
            if (!user) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'User not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.findOneUser(id) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findOwnProfile(request) {
        const currentToken = request.headers['access_token'];
        const manageToken = (0, use_token_1.useToken)(currentToken);
        const id = manageToken.sub;
        try {
            const user = await this.userRepository
                .createQueryBuilder('user')
                .where({ id })
                .leftJoin('user.posts', 'posts', this.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.updateAt', 'posts.title',
                'posts.description', 'posts.status', 'posts.category'
            ])
                .leftJoin('posts.category', 'posts_category', this.onlyPublished('posts_category', this.request))
                .addSelect([
                'posts_category.id', 'posts_category.updateAt', 'posts_category.title',
                'posts_category.description', 'posts_category.status'
            ])
                .leftJoin('user.comments', 'comments')
                .addSelect([
                'comments.id', 'comments.message', 'comments.post'
            ])
                .leftJoin('comments.post', 'comments_post')
                .addSelect([
                'comments_post.id', 'comments_post.title', 'comments_post.updateAt'
            ])
                .orderBy('user.created_at', 'DESC')
                .getOne();
            if (!user) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Error while loading your user data.'
                });
            }
            logging_messages_1.LoggingMessages.log(user, 'UsersService.findOwnProfile(request) -> user', this.dataForLog);
            return user;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async findAllUsers(query) {
        try {
            const queryBuilder = this.userRepository
                .createQueryBuilder('users')
                .where(this.onlyEnabledUsers(this.request))
                .leftJoin('users.posts', 'posts', this.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.updateAt', 'posts.title',
                'posts.description', 'posts.status', 'posts.category'
            ])
                .leftJoin('posts.category', 'posts_category', this.onlyPublished('posts_category', this.request))
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
            const users = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.isRoleBasic(this.request) ?
                users_default_1.USERS_DEFAULT_CONFIG_LOW
                : users_default_1.USERS_DEFAULT_CONFIG));
            if (Object.keys(users.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Users not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(users, 'UsersService.findAllUsers() -> users', this.dataForLog);
            return users;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async searchUsers(query) {
        try {
            const queryBuilder = this.userRepository
                .createQueryBuilder('users')
                .where(this.onlyEnabledUsers(this.request))
                .leftJoin('users.posts', 'posts', this.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.updateAt', 'posts.title',
                'posts.description', 'posts.status', 'posts.category'
            ])
                .leftJoin('posts.category', 'posts_category', this.onlyPublished('posts_category', this.request))
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
            const users = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.isRoleBasic(this.request) ? users_search_1.USERS_SEARCH_CONFIG_LOW : users_search_1.USERS_SEARCH_CONFIG));
            if (Object.keys(users.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Users not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(users, 'UsersService.searchUsers() -> users', this.dataForLog);
            return users;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async filterUsers(query) {
        try {
            const queryBuilder = this.userRepository
                .createQueryBuilder('users')
                .where(this.onlyEnabledUsers(this.request))
                .leftJoin('users.posts', 'posts', this.onlyPublished('posts', this.request))
                .addSelect([
                'posts.id', 'posts.updateAt', 'posts.title',
                'posts.description', 'posts.status', 'posts.category'
            ])
                .leftJoin('posts.category', 'posts_category', this.onlyPublished('posts_category', this.request))
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
            const users = await (0, nestjs_paginate_1.paginate)(query, queryBuilder, (this.isRoleBasic(this.request) ? users_filter_1.USERS_FILTER_CONFIG_LOW : users_filter_1.USERS_FILTER_CONFIG));
            if (Object.keys(users.data).length === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Users not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(users, 'UsersService.filterUsers() -> users', this.dataForLog);
            return users;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_2.InjectRepository)(users_entity_1.UsersEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(settings_entity_1.SettingsEntity)),
    __metadata("design:paramtypes", [Request,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map