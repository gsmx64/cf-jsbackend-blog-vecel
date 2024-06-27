import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CategoriesEntity } from '../entities/categories.entity';
import { CategoryCreateDTO } from '../dto/category.create.dto';
import { CategoryUpdateDTO } from '../dto/category.update.dto';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../../users/services/users.service';
export declare class CategoriesService {
    private request;
    private readonly categoryRepository;
    private authService;
    private userService;
    private dataForLog;
    constructor(request: Request, categoryRepository: Repository<CategoriesEntity>, authService: AuthService, userService: UsersService);
    createCategory(body: CategoryCreateDTO): Promise<CategoriesEntity>;
    updateCategory(body: CategoryUpdateDTO, id: string): Promise<UpdateResult | undefined>;
    deleteCategory(id: string): Promise<DeleteResult | undefined>;
    findOneCategory(id: string): Promise<CategoriesEntity>;
    findAllCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
    searchCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
    filterCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
}
