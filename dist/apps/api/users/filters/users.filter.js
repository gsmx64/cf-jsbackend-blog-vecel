"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERS_FILTER_CONFIG_LOW = exports.USERS_FILTER_CONFIG = void 0;
const nestjs_paginate_1 = require("nestjs-paginate");
const user_status_1 = require("../../constants/user.status");
exports.USERS_FILTER_CONFIG = {
    sortableColumns: [
        'id', 'username', 'email', 'status', 'role', 'firstName', 'lastName',
        'age', 'city', 'country', 'createAt', 'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    select: [
        'id', 'username', 'email', 'status', 'rol', 'karma', 'avatar',
        'firstName', 'lastName', 'age', 'city', 'country', 'createAt',
        'updateAt'
    ],
    filterableColumns: {
        id: true,
        username: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterOperator.ILIKE],
        email: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterOperator.ILIKE],
        status: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterSuffix.NOT],
        role: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterSuffix.NOT],
        firstName: [nestjs_paginate_1.FilterOperator.ILIKE],
        lastName: [nestjs_paginate_1.FilterOperator.ILIKE],
        age: [
            nestjs_paginate_1.FilterOperator.EQ,
            nestjs_paginate_1.FilterOperator.BTW,
            nestjs_paginate_1.FilterOperator.LT,
            nestjs_paginate_1.FilterOperator.LTE,
            nestjs_paginate_1.FilterOperator.GT,
            nestjs_paginate_1.FilterOperator.GTE
        ],
        city: [nestjs_paginate_1.FilterOperator.ILIKE],
        country: [nestjs_paginate_1.FilterOperator.ILIKE],
        content: [nestjs_paginate_1.FilterOperator.ILIKE],
        createAt: [
            nestjs_paginate_1.FilterOperator.BTW,
            nestjs_paginate_1.FilterOperator.LT,
            nestjs_paginate_1.FilterOperator.LTE,
            nestjs_paginate_1.FilterOperator.GT,
            nestjs_paginate_1.FilterOperator.GTE
        ],
        updateAt: [
            nestjs_paginate_1.FilterOperator.BTW,
            nestjs_paginate_1.FilterOperator.LT,
            nestjs_paginate_1.FilterOperator.LTE,
            nestjs_paginate_1.FilterOperator.GT,
            nestjs_paginate_1.FilterOperator.GTE
        ],
    },
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
exports.USERS_FILTER_CONFIG_LOW = {
    ...exports.USERS_FILTER_CONFIG,
    where: { status: user_status_1.USER_STATUS.ENABLED },
};
//# sourceMappingURL=users.filter.js.map