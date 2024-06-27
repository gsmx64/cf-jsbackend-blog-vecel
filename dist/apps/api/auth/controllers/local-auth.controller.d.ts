import { AuthService } from '../services/auth.service';
import { AuthDTO } from '../dto/auth.dto';
export declare class LocalAuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login({ username, password }: AuthDTO): Promise<any>;
    role(id: string): Promise<any>;
}
