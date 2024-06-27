"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIES_FILTER_CONFIG_LOW = exports.CATEGORIES_FILTER_CONFIG = void 0;
const nestjs_paginate_1 = require("nestjs-paginate");
const publish_status_1 = require("../../constants/publish.status");
exports.CATEGORIES_FILTER_CONFIG = {
    sortableColumns: [
        'id', 'title', 'status', 'author', 'createAt', 'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    select: [
        'id', 'title', 'description', 'image', 'status', 'author',
        'posts', 'createAt', 'updateAt'
    ],
    filterableColumns: {
        id: true,
        title: [nestjs_paginate_1.FilterOperator.ILIKE],
        description: [nestjs_paginate_1.FilterOperator.ILIKE],
        status: [nestjs_paginate_1.FilterOperator.EQ, nestjs_paginate_1.FilterSuffix.NOT],
        author: [nestjs_paginate_1.FilterOperator.ILIKE],
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
        author: { posts: true },
        posts: { category: true }
    },
    loadEagerRelations: false,
    relativePath: false,
};
exports.CATEGORIES_FILTER_CONFIG_LOW = {
    ...exports.CATEGORIES_FILTER_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=categories.filter.js.map