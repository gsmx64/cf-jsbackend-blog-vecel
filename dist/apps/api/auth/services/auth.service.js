"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users_service_1 = require("../../users/services/users.service");
const logging_messages_1 = require("../../utils/logging.messages");
const use_token_1 = require("../../utils/use.token");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(username, password) {
        const userByUsername = await this.userService.findLoginBy({
            key: 'username',
            value: username,
        });
        const userByEmail = await this.userService.findLoginBy({
            key: 'email',
            value: username,
        });
        if (userByUsername) {
            const match = await bcrypt.compare(password, userByUsername.password);
            if (match)
                return userByUsername;
        }
        if (userByEmail) {
            const match = await bcrypt.compare(password, userByEmail.password);
            if (match)
                return userByEmail;
        }
        return null;
    }
    signJWT({ payload, secret, expires, }) {
        return jwt.sign(payload, secret, { expiresIn: expires });
    }
    async generateJWT(user) {
        const getUser = await this.userService.findIdRoleOnly(user.id);
        const payload = {
            role: getUser.role,
            sub: getUser.id,
        };
        return {
            access_token: this.signJWT({
                payload,
                secret: process.env.APP_AUTH_SECRET,
                expires: process.env.APP_AUTH_TOKEN_EXPIRATION,
            }),
            user,
        };
    }
    async getUserRole(id) {
        const getUser = await this.userService.findIdRoleOnly(id);
        return getUser.role;
    }
    async getUserId(request) {
        const currentToken = request.headers['access_token'];
        const manageToken = (0, use_token_1.useToken)(currentToken);
        return manageToken.sub;
    }
    async login({ username, password }) {
        const userValidate = await this.validateUser(username, password);
        if (!userValidate) {
            throw new common_1.UnauthorizedException('Data not valid');
        }
        const jwt = await this.generateJWT(userValidate);
        logging_messages_1.LoggingMessages.log(jwt, 'AuthService.login({ username, password }) -> jwt', jwt);
        return jwt;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map