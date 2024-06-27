import { Repository } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { UsersEntity } from '../../users/entities/users.entity';
import { CategoriesEntity } from '../../categories/entities/categories.entity';
import { PostsEntity } from '../../posts/entities/posts.entity';
import { CommentsEntity } from '../../comments/entities/comments.entity';
import { UsersService } from '../../users/services/users.service';
export declare class SearchService {
    private request;
    private readonly userRepository;
    private readonly categoryRepository;
    private readonly postRepository;
    private readonly commentRepository;
    private userService;
    private dataForLog;
    constructor(request: Request, userRepository: Repository<UsersEntity>, categoryRepository: Repository<CategoriesEntity>, postRepository: Repository<PostsEntity>, commentRepository: Repository<CommentsEntity>, userService: UsersService);
    searchUsers(query: PaginateQuery): Promise<Paginated<UsersEntity>>;
    searchCategories(query: PaginateQuery): Promise<Paginated<CategoriesEntity>>;
    searchPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    searchComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
}
