import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CommentsEntity } from '../entities/comments.entity';
import { CommentCreateDTO } from '../dto/comment.create.dto';
import { CommentUpdateDTO } from '../dto/comment.update.dto';
import { AuthService } from '../../auth/services/auth.service';
import { UsersService } from '../../users/services/users.service';
export declare class CommentsService {
    private request;
    private readonly commentRepository;
    private authService;
    private userService;
    private dataForLog;
    constructor(request: Request, commentRepository: Repository<CommentsEntity>, authService: AuthService, userService: UsersService);
    createComment(body: CommentCreateDTO): Promise<CommentsEntity>;
    updateComment(body: CommentUpdateDTO, id: string): Promise<UpdateResult | undefined>;
    deleteComment(id: string): Promise<DeleteResult | undefined>;
    findOneComment(id: string): Promise<CommentsEntity>;
    findCommentsByUser(id: string, query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
    findAllComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
    searchComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
    filterComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
}
