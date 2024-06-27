import { Repository, UpdateResult } from 'typeorm';
import { SettingsEntity } from '../entities/settings.entity';
import { SettingsUpdateDTO } from '../dto/settings.update.dto';
import { UsersService } from '../../users/services/users.service';
import { AuthService } from '../../auth/services/auth.service';
import { PostsEntity } from '../../posts/entities/posts.entity';
export declare class SettingsService {
    private request;
    private readonly settingsRepository;
    private readonly postRepository;
    private authService;
    private userService;
    private dataForLog;
    constructor(request: Request, settingsRepository: Repository<SettingsEntity>, postRepository: Repository<PostsEntity>, authService: AuthService, userService: UsersService);
    updateSettings(body: SettingsUpdateDTO): Promise<UpdateResult | undefined>;
    getSettings(): Promise<SettingsEntity>;
    loadSampleData(sample: string): Promise<string>;
}
