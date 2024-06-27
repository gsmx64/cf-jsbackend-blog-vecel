import { SettingsService } from '../services/settings.service';
import { SettingsUpdateDTO } from '../dto/settings.update.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    updateSettings(body: SettingsUpdateDTO): Promise<import("typeorm").UpdateResult>;
    getSettings(): Promise<import("../entities/settings.entity").SettingsEntity>;
    loadSampleData(sample: string): Promise<string>;
}
