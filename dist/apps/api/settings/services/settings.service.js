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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const node_sql_reader_1 = require("node-sql-reader");
const path = require("path");
const settings_entity_1 = require("../entities/settings.entity");
const error_manager_1 = require("../../utils/error.manager");
const users_service_1 = require("../../users/services/users.service");
const logging_messages_1 = require("../../utils/logging.messages");
const auth_service_1 = require("../../auth/services/auth.service");
const data_source_1 = require("../../config/data.source");
const posts_entity_1 = require("../../posts/entities/posts.entity");
let SettingsService = class SettingsService {
    constructor(request, settingsRepository, postRepository, authService, userService) {
        this.request = request;
        this.settingsRepository = settingsRepository;
        this.postRepository = postRepository;
        this.authService = authService;
        this.userService = userService;
        this.dataForLog = this.userService.getUserRoleforLogging(this.request);
    }
    async updateSettings(body) {
        try {
            const settings = await this.settingsRepository.update(1, body);
            if (settings.affected === 0) {
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'No changes made while updating the settings.'
                });
            }
            logging_messages_1.LoggingMessages.log(settings, 'SettingsService.updateSettings(body) -> settings', this.dataForLog);
            return settings;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async getSettings() {
        try {
            const settings = await this.settingsRepository
                .createQueryBuilder('settings')
                .where('settings.id = :Id', { Id: 1 })
                .getOne();
            if (!settings) {
                this.settingsRepository.save({ "id": "1", "activation": "auto" });
                throw new error_manager_1.ErrorManager({
                    type: 'NO_CONTENT',
                    message: 'Settings not found.'
                });
            }
            logging_messages_1.LoggingMessages.log(settings, 'SettingsService.getSettings() -> settings', this.dataForLog);
            return settings;
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
    async loadSampleData(sample) {
        try {
            if (sample !== 'install_sample_data') {
                return;
            }
            const post = await this.postRepository
                .createQueryBuilder('post')
                .where({ id: 'cd524607-d326-4afe-8815-4f8796b4a8d0' })
                .getOne();
            if (!post) {
                const appDataSource = await data_source_1.AppDS.initialize();
                const queryRunner = appDataSource.createQueryRunner();
                const queries = node_sql_reader_1.SqlReader.readSqlFile(path.join(__dirname, "../../utils/sample_data.sql"));
                for (let query of queries) {
                    queryRunner.manager.query(query);
                }
                return 'Sampla data was loaded successfully!';
            }
            else {
                return 'Sampla data already loaded!';
            }
        }
        catch (error) {
            throw error_manager_1.ErrorManager.createSignatureError(error.message);
        }
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __param(1, (0, typeorm_2.InjectRepository)(settings_entity_1.SettingsEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(posts_entity_1.PostsEntity)),
    __metadata("design:paramtypes", [Request,
        typeorm_1.Repository,
        typeorm_1.Repository,
        auth_service_1.AuthService,
        users_service_1.UsersService])
], SettingsService);
//# sourceMappingURL=settings.service.js.map