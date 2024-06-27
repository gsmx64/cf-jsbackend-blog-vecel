import { AuthService } from '../services/auth.service';
export declare class FacebookAuthController {
    private authService;
    constructor(authService: AuthService);
    facebookLogin(): Promise<any>;
    facebookLoginRedirect(req: any): Promise<any>;
}
