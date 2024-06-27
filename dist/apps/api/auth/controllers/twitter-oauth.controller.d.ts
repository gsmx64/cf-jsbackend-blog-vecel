import { AuthService } from '../services/auth.service';
export declare class TwitterOAuthController {
    private authService;
    constructor(authService: AuthService);
    twitterLogin(): Promise<void>;
    twitterLoginCallback(req: any): Promise<import("../interfaces/auth.interface").AuthResponse>;
}
