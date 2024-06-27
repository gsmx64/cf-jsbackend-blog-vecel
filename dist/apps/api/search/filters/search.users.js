"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_USERS_CONFIG_LOW = exports.SEARCH_USERS_CONFIG = void 0;
const users_filter_1 = require("../../users/filters/users.filter");
const user_status_1 = require("../../constants/user.status");
exports.SEARCH_USERS_CONFIG = {
    ...users_filter_1.USERS_FILTER_CONFIG,
    searchableColumns: [
        'username', 'email', 'firstName', 'lastName', 'age', 'city',
        'country'
    ],
};
exports.SEARCH_USERS_CONFIG_LOW = {
    ...exports.SEARCH_USERS_CONFIG,
    where: { status: user_status_1.USER_STATUS.ENABLED },
};
//# sourceMappingURL=search.users.js.map