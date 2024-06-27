import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CommentsService } from '../services/comments.service';
import { CommentCreateDTO } from '../dto/comment.create.dto';
import { CommentUpdateDTO } from '../dto/comment.update.dto';
import { CommentsEntity } from '../entities/comments.entity';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(body: CommentCreateDTO): Promise<CommentsEntity>;
    updateComment(id: string, body: CommentUpdateDTO): Promise<import("typeorm").UpdateResult>;
    deleteComment(id: string): Promise<import("typeorm").DeleteResult>;
    findOneComment(id: string): Promise<CommentsEntity>;
    findCommentsByUser(id: string, query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
    findAllComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
    searchComments(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
    filterPosts(query: PaginateQuery): Promise<Paginated<CommentsEntity>>;
}
