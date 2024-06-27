"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_CATEGORIES_CONFIG_LOW = exports.SEARCH_CATEGORIES_CONFIG = void 0;
const categories_filter_1 = require("../../categories/filters/categories.filter");
const publish_status_1 = require("../../constants/publish.status");
exports.SEARCH_CATEGORIES_CONFIG = {
    ...categories_filter_1.CATEGORIES_FILTER_CONFIG,
    searchableColumns: ['title', 'description'],
};
exports.SEARCH_CATEGORIES_CONFIG_LOW = {
    ...exports.SEARCH_CATEGORIES_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=search.categories.js.map