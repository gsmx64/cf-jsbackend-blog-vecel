"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMENTS_SEARCH_CONFIG = void 0;
exports.COMMENTS_SEARCH_CONFIG = {
    sortableColumns: [
        'id', 'message', 'author', 'post', 'createAt', 'updateAt'
    ],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    searchableColumns: ['message'],
    select: [
        'id', 'message', 'reaction', 'author', 'post',
        'createAt', 'updateAt'
    ],
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
//# sourceMappingURL=comments.search.js.map