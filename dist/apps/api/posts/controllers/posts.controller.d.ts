import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { PostsService } from '../services/posts.service';
import { PostCreateDTO } from '../dto/post.create.dto';
import { PostUpdateDTO } from '../dto/post.update.dto';
import { PostsEntity } from '../entities/posts.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(body: PostCreateDTO): Promise<PostsEntity>;
    updatePost(id: string, body: PostUpdateDTO): Promise<import("typeorm").UpdateResult>;
    deletePost(id: string): Promise<import("typeorm").DeleteResult>;
    findOnePost(id: string): Promise<PostsEntity>;
    findPostsByUser(id: string, query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    findAllPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    searchPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
    filterPosts(query: PaginateQuery): Promise<Paginated<PostsEntity>>;
}
