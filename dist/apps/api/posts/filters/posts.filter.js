"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTS_FILTER_CONFIG_LOW = exports.POSTS_FILTER_CONFIG = void 0;
const nestjs_paginate_1 = require("nestjs-paginate");
const publish_status_1 = require("../../constants/publish.status");
exports.POSTS_FILTER_CONFIG = {
    sortableColumns: [
        'id', 'title', 'status', 'author', 'category', 'createAt', 'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    select: [
        'id', 'title', 'description', 'status', 'content', 'author',
        'category', 'createAt', 'updateAt'
    ],
    filterableColumns: {
        id: true,
        title: [nestjs_paginate_1.FilterOperator.ILIKE],
        description: [nestjs_paginate_1.FilterOperator.ILIKE],
        status: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterSuffix.NOT],
        content: [nestjs_paginate_1.FilterOperator.ILIKE],
        author: [nestjs_paginate_1.FilterOperator.ILIKE],
        category: [nestjs_paginate_1.FilterOperator.ILIKE],
        createAt: [
            nestjs_paginate_1.FilterOperator.BTW,
            nestjs_paginate_1.FilterOperator.LT,
            nestjs_paginate_1.FilterOperator.LTE,
            nestjs_paginate_1.FilterOperator.GT,
            nestjs_paginate_1.FilterOperator.GTE,
        ],
        updateAt: [
            nestjs_paginate_1.FilterOperator.BTW,
            nestjs_paginate_1.FilterOperator.LT,
            nestjs_paginate_1.FilterOperator.LTE,
            nestjs_paginate_1.FilterOperator.GT,
            nestjs_paginate_1.FilterOperator.GTE,
        ],
    },
    defaultLimit: process.env.APP_PAGINATION_DEFAULT_LIMIT || 10,
    maxLimit: process.env.APP_PAGINATION_MAX_LIMIT || 100,
    withDeleted: false,
    relations: {
        author: {},
        category: {},
        comments: {}
    },
    loadEagerRelations: false,
    relativePath: false,
};
exports.POSTS_FILTER_CONFIG_LOW = {
    ...exports.POSTS_FILTER_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=posts.filter.js.map