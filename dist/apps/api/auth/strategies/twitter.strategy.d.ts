import { AuthService } from '../services/auth.service';
import { Strategy } from '@superfaceai/passport-twitter-oauth2';
declare const TwitterStrategy_base: new (...args: any[]) => Strategy;
export declare class TwitterStrategy extends TwitterStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(token: string, secret: string, profile: any): Promise<any>;
}
export {};
