import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { UsersEntity } from '../entities/users.entity';
import { SettingsEntity } from '../../settings/entities/settings.entity';
import { UserCreateDTO } from '../dto/user.create.dto';
import { UserUpdateDTO } from '../dto/user.update.dto';
import { IUserPassword } from '../interfaces/user.interface';
export declare class UsersService {
    private request;
    private readonly userRepository;
    private readonly settingsRepository;
    private dataForLog;
    constructor(request: Request, userRepository: Repository<UsersEntity>, settingsRepository: Repository<SettingsEntity>);
    onlyPublished(alias: string, request: any): string;
    onlyEnabledUsers(request: any): "users.status = 'ENABLED'" | "users.lastName != 'fake-query'";
    isRoleBasic(request: any): boolean;
    getUserRoleforLogging(request: any): {
        user: string;
        role: string;
    };
    createUser(body: UserCreateDTO): Promise<UsersEntity>;
    updateUser(body: UserUpdateDTO, id: string, request: any): Promise<UpdateResult | undefined>;
    updateUserPassword(body: IUserPassword, id: string, request: any): Promise<UpdateResult | undefined>;
    deleteUser(id: string): Promise<DeleteResult | undefined>;
    findLoginBy({ key, value }: {
        key: keyof UserCreateDTO;
        value: any;
    }): Promise<UsersEntity>;
    private findPasswordById;
    usernameExist(username: string): Promise<any>;
    emailExist(email: string): Promise<any>;
    findIdRoleOnly(id: string): Promise<UsersEntity>;
    findOneUser(id: string): Promise<UsersEntity>;
    findOwnProfile(request: any): Promise<UsersEntity>;
    findAllUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
    searchUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
    filterUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
}
