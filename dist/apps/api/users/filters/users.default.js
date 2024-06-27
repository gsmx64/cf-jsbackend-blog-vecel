"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_DEFAULT_CONFIG_LOW = exports.USERS_DEFAULT_CONFIG = void 0;
const user_status_1 = require("../../constants/user.status");
exports.USERS_DEFAULT_CONFIG = {
    sortableColumns: ['username', 'updateAt'],
    nullSort: 'last',
    defaultSortBy: [['username', 'ASC']],
    defaultLimit: process.env.APP_PAGINATION_DEFAULT_LIMIT || 10,
    maxLimit: process.env.APP_PAGINATION_MAX_LIMIT || 100,
    withDeleted: false,
    loadEagerRelations: false,
    relativePath: false,
};
exports.USERS_DEFAULT_CONFIG_LOW = {
    ...exports.USERS_DEFAULT_CONFIG,
    where: { status: user_status_1.USER_STATUS.ENABLED },
};
//# sourceMappingURL=users.default.js.map