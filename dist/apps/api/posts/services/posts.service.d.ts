import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { PostsEntity } from '../entities/posts.entity';
import { PostCreateDTO } from '../dto/post.create.dto';
import { PostUpdateDTO } from '../dto/post.update.dto';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../../users/services/users.service';
export declare class PostsService {
    private request;
    private readonly postRepository;
    private authService;
    private userService;
    private dataForLog;
    constructor(request: Request, postRepository: Repository<PostsEntity>, authService: AuthService, userService: UsersService);
    createPost(body: PostCreateDTO): Promise<PostsEntity>;
    updatePost(body: PostUpdateDTO, id: string): Promise<UpdateResult | undefined>;
    deletePost(id: string): Promise<DeleteResult | undefined>;
    findOnePost(id: string): Promise<PostsEntity>;
    findPostsByUser(id: string, query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    findAllPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    searchPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    filterPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
}
