"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWAGGER_COMMENT_BODY_EXAMPLE = exports.SWAGGER_POST_BODY_EXAMPLE = exports.SWAGGER_CATEGORY_BODY_EXAMPLE = exports.SWAGGER_USER_BODY_EXAMPLE = exports.SWAGGER_ID_EXAMPLE = void 0;
exports.SWAGGER_ID_EXAMPLE = 'f68b3d30-e04a-4a19-b211-b3c809c2ded9';
exports.SWAGGER_USER_BODY_EXAMPLE = '{ "username": "user", \
    "password": "password123", "status": "PENDING", "role": "ADMIN", \
    "firstName": "User", "lastName": "Tester", "email": "admin@tester.com", \
    "age": 25, "city": "City", "country": "Country", \
    "avatar": "https://url.com/avatar.png", "karma": 0 }';
exports.SWAGGER_CATEGORY_BODY_EXAMPLE = '{ "title": "Default Category", \
    "description": "Default Category description.", \
    "image": "https://url.com/avatar.png", \
    "author": "f68b3d30-e04a-4a19-b211-b3c809c2ded9", \
    "status": "PUBLISHED", "posts": [] }';
exports.SWAGGER_POST_BODY_EXAMPLE = '{ "title": "Test title", \
    "description": "Test description.", "https://url.com/avatar.png", \
    "content": "Testing content.", "status": "PUBLISHED", \
    "author": "f68b3d30-e04a-4a19-b211-b3c809c2ded9", \
    "category": "c1180585-8ab8-4f85-9316-6ab1960abf92", "posts": [], \
    "comments": [] }';
exports.SWAGGER_COMMENT_BODY_EXAMPLE = '{ "message": "Testing message.", \
    "reaction": "", "author": "f68b3d30-e04a-4a19-b211-b3c809c2ded9", \
    "posts": [] }';
//# sourceMappingURL=swagger.examples.js.map