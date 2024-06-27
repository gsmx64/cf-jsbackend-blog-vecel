"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIES_DEFAULT_CONFIG_LOW = exports.CATEGORIES_DEFAULT_CONFIG = void 0;
const publish_status_1 = require("../../constants/publish.status");
exports.CATEGORIES_DEFAULT_CONFIG = {
    sortableColumns: ['updateAt'],
    nullSort: 'last',
    defaultSortBy: [['updateAt', 'DESC']],
    defaultLimit: process.env.APP_PAGINATION_DEFAULT_LIMIT || 10,
    maxLimit: process.env.APP_PAGINATION_MAX_LIMIT || 100,
    withDeleted: false,
    loadEagerRelations: false,
    relativePath: false,
};
exports.CATEGORIES_DEFAULT_CONFIG_LOW = {
    ...exports.CATEGORIES_DEFAULT_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=categories.default.js.map