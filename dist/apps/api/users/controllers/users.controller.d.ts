import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { UsersService } from '../services/users.service';
import { UserCreateDTO } from '../dto/user.create.dto';
import { UserUpdateDTO } from '../dto/user.update.dto';
import { UsersEntity } from '../entities/users.entity';
import { IUserPassword } from '../interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(body: UserCreateDTO): Promise<UsersEntity>;
    usernameExist(username: string): Promise<any>;
    emailExist(email: string): Promise<any>;
    updateUser(id: string, body: UserUpdateDTO, request: Request): Promise<import("typeorm").UpdateResult>;
    updateUserPassword(id: string, body: IUserPassword, request: Request): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: string): Promise<import("typeorm").DeleteResult>;
    findOneUser(id: string): Promise<UsersEntity>;
    findOwnProfile(request: Request): Promise<UsersEntity>;
    findAllUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
    searchUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
    filterUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
}
