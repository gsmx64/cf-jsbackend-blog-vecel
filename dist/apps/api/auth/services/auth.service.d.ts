import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { AuthResponse } from '../interfaces/auth.interface';
import { UsersService } from '../../users/services/users.service';
import { UsersEntity } from '../../users/entities/users.entity';
import { AuthDTO } from '../dto/auth.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<UsersEntity | null>;
    signJWT({ payload, secret, expires, }: {
        payload: jwt.JwtPayload;
        secret: string;
        expires: number | string;
    }): string;
    generateJWT(user: UsersEntity): Promise<AuthResponse>;
    getUserRole(id: string): Promise<any>;
    getUserId(request: any): Promise<any>;
    login({ username, password }: AuthDTO): Promise<AuthResponse>;
}
