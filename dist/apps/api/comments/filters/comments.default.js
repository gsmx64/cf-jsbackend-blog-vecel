"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMENTS_DEFAULT_CONFIG = void 0;
exports.COMMENTS_DEFAULT_CONFIG = {
    sortableColumns: ['updateAt'],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    defaultLimit: process.env.APP_PAGINATION_DEFAULT_LIMIT || 10,
    maxLimit: process.env.APP_PAGINATION_MAX_LIMIT || 100,
    withDeleted: false,
    loadEagerRelations: false,
    relativePath: false,
};
//# sourceMappingURL=comments.default.js.map