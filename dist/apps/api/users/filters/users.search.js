"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_SEARCH_CONFIG_LOW = exports.USERS_SEARCH_CONFIG = void 0;
const user_status_1 = require("../../constants/user.status");
exports.USERS_SEARCH_CONFIG = {
    sortableColumns: [
        'id', 'username', 'email', 'status', 'role', 'firstName',
        'lastName', 'age', 'city', 'country', 'createAt', 'updateAt'
    ],
    defaultSortBy: [['updateAt', 'DESC']],
    searchableColumns: [
        'username', 'email', 'firstName', 'lastName', 'age', 'city',
        'country'
    ],
    select: [
        'id', 'username', 'email', 'status', 'rol', 'karma', 'avatar',
        'firstName', 'lastName', 'age', 'city', 'country', 'createAt',
        'updateAt'
    ],
    defaultLimit: process.env.APP_PAGINATION_DEFAULT_LIMIT || 10,
    maxLimit: process.env.APP_PAGINATION_MAX_LIMIT || 100,
    withDeleted: false,
    relations: {
        posts: { author: true },
        comments: { author: true }
    },
    loadEagerRelations: false,
    relativePath: false,
};
exports.USERS_SEARCH_CONFIG_LOW = {
    ...exports.USERS_SEARCH_CONFIG,
    where: { status: user_status_1.USER_STATUS.ENABLED },
};
//# sourceMappingURL=users.search.js.map