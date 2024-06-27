"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIES_SEARCH_CONFIG_LOW = exports.CATEGORIES_SEARCH_CONFIG = void 0;
const publish_status_1 = require("../../constants/publish.status");
exports.CATEGORIES_SEARCH_CONFIG = {
    sortableColumns: [
        'id', 'title', 'status', 'author', 'createAt', 'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    searchableColumns: ['title', 'description'],
    select: [
        'id', 'title', 'description', 'image', 'status', 'author',
        'posts', 'createAt', 'updateAt'
    ],
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
exports.CATEGORIES_SEARCH_CONFIG_LOW = {
    ...exports.CATEGORIES_SEARCH_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=categories.search.js.map