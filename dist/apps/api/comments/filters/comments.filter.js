"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMENTS_FILTER_CONFIG = void 0;
const nestjs_paginate_1 = require("nestjs-paginate");
exports.COMMENTS_FILTER_CONFIG = {
    sortableColumns: [
        'id', 'message', 'author', 'post', 'createAt', 'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    select: [
        'id', 'message', 'reaction', 'author', 'post',
        'createAt', 'updateAt'
    ],
    filterableColumns: {
        id: true,
        message: [nestjs_paginate_1.FilterOperator.ILIKE],
        author: [nestjs_paginate_1.FilterOperator.ILIKE],
        post: [nestjs_paginate_1.FilterOperator.ILIKE],
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
        author: { comments: true },
        post: { comments: true }
    },
    loadEagerRelations: false,
    relativePath: false,
};
//# sourceMappingURL=comments.filter.js.map