"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_POSTS_CONFIG_LOW = exports.SEARCH_POSTS_CONFIG = void 0;
const posts_filter_1 = require("../../posts/filters/posts.filter");
const publish_status_1 = require("../../constants/publish.status");
exports.SEARCH_POSTS_CONFIG = {
    ...posts_filter_1.POSTS_FILTER_CONFIG,
    searchableColumns: ['title', 'description', 'content'],
};
exports.SEARCH_POSTS_CONFIG_LOW = {
    ...exports.SEARCH_POSTS_CONFIG,
    where: { status: publish_status_1.PUBLISH_STATUS.PUBLISHED },
};
//# sourceMappingURL=search.posts.js.map