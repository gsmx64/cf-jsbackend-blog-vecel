import { ISettings } from "../interfaces/settings.interface";
export declare class SettingsEntity implements ISettings {
    id: string;
    updateAt: Date;
    brand: string;
    activation: string;
    terms: string;
    facebook: string;
    instagram: string;
    twitterx: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
    setup: number;
}
