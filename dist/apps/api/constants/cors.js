"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CORS = void 0;
exports.CORS = {
    origin: (process.env.NODE_ENV === 'production') ? process.env.APP_CORS_PROD_WHITELIST.split(", ") : true,
    credentials: true,
    allowedHeaders: 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access_token',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204
};
//# sourceMappingURL=cors.js.map