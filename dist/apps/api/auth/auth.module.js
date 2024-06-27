"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./services/auth.service");
const users_service_1 = require("../users/services/users.service");
const users_module_1 = require("../users/users.module");
const facebook_strategy_1 = require("./strategies/facebook.strategy");
const google_strategy_1 = require("./strategies/google.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
const twitter_strategy_1 = require("./strategies/twitter.strategy");
const facebook_auth_controller_1 = require("./controllers/facebook-auth.controller");
const google_oauth_controller_1 = require("./controllers/google-oauth.controller");
const jwt_auth_controller_ts_1 = require("./controllers/jwt-auth.controller.ts");
const local_auth_controller_1 = require("./controllers/local-auth.controller");
const twitter_oauth_controller_1 = require("./controllers/twitter-oauth.controller");
function getProviders() {
    const providers = [];
    providers.push(auth_service_1.AuthService);
    providers.push(users_service_1.UsersService);
    if (String(process.env.APP_AUTH_FACEBOOK_ENABLE) === 'true')
        providers.push(facebook_strategy_1.FacebookStrategy);
    if (String(process.env.APP_AUTH_GOOGLE_ENABLE) === 'true')
        providers.push(google_strategy_1.GoogleStrategy);
    if (String(process.env.APP_AUTH_TWITTER_ENABLE) === 'true')
        providers.push(twitter_strategy_1.TwitterStrategy);
    providers.push(jwt_auth_controller_ts_1.JwtAuthController);
    providers.push(local_strategy_1.LocalStrategy);
    return providers;
}
function getControllers() {
    const controllers = [];
    if (String(process.env.APP_AUTH_FACEBOOK_ENABLE) === 'true')
        controllers.push(facebook_auth_controller_1.FacebookAuthController);
    if (String(process.env.APP_AUTH_GOOGLE_ENABLE) === 'true')
        controllers.push(google_oauth_controller_1.GoogleOauthController);
    if (String(process.env.APP_AUTH_TWITTER_ENABLE) === 'true')
        controllers.push(twitter_oauth_controller_1.TwitterOAuthController);
    controllers.push(jwt_auth_controller_ts_1.JwtAuthController);
    controllers.push(local_auth_controller_1.LocalAuthController);
    return controllers;
}
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: async () => ({
                    secret: process.env.APP_AUTH_SECRET,
                    signOptions: {
                        expiresIn: process.env.APP_AUTH_TOKEN_EXPIRATION,
                    },
                }),
                inject: [],
            }),
            users_module_1.UsersModule,
        ],
        providers: getProviders(),
        controllers: getControllers(),
        exports: [],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map