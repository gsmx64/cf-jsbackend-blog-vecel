/// <reference types="cookie-parser" />
/// <reference types="passport" />
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
export declare class GoogleOauthController {
    private authService;
    constructor(authService: AuthService);
    googleAuth(_req: any): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<Express.User>;
}
