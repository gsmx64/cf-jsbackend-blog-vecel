"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POSTS_SEARCH_CONFIG_LOW = exports.POSTS_SEARCH_CONFIG = void 0;
const publish_status_1 = require("../../constants/publish.status");
exports.POSTS_SEARCH_CONFIG = {
    sortableColumns: [
        'id', 'title', 'status', 'author', 'category', 'createAt',
        'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    searchableColumns: ['title', 'description', 'content'],
    select: [
        'id', 'title', 'description', 'content', 'status', 'author',
        'category', 'createAt', 'updateAt'
    ],
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
exports.POSTS_SEARCH_CONFIG_LOW = {
    ...exports.POSTS_SEARCH_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=posts.search.js.map