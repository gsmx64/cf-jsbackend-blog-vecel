import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CategoriesService } from '../services/categories.service';
import { CategoryCreateDTO } from '../dto/category.create.dto';
import { CategoryUpdateDTO } from '../dto/category.update.dto';
import { CategoriesEntity } from '../entities/categories.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(body: CategoryCreateDTO): Promise<CategoriesEntity>;
    updateCategory(id: string, body: CategoryUpdateDTO): Promise<import("typeorm").UpdateResult>;
    deleteCategory(id: string): Promise<import("typeorm").DeleteResult>;
    findOneCategory(id: string): Promise<CategoriesEntity>;
    findAllCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
    searchCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
    filterCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
}
