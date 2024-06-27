import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { SearchService } from '../services/search.service';
import { UsersEntity } from '../../users/entities/users.entity';
import { CategoriesEntity } from '../../categories/entities/categories.entity';
import { PostsEntity } from '../../posts/entities/posts.entity';
import { CommentsEntity } from '../../comments/entities/comments.entity';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    searchUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
    searchCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
    searchPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    searchComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
}
