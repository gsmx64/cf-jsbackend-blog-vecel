"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEARCH_COMMENTS_CONFIG = void 0;
const comments_filter_1 = require("../../comments/filters/comments.filter");
exports.SEARCH_COMMENTS_CONFIG = {
    ...comments_filter_1.COMMENTS_FILTER_CONFIG,
    searchableColumns: ['message'],
};
//# sourceMappingURL=search.comments.js.map