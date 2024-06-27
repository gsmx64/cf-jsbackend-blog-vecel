import { IComment } from "../interfaces/comment.interface";
import { BaseEntity } from "../../config/base.entity";
import { UsersEntity } from "../../users/entities/users.entity";
import { PostsEntity } from "../../posts/entities/posts.entity";
export declare class CommentsEntity extends BaseEntity implements IComment {
    message: string;
    author: UsersEntity;
    post: PostsEntity;
}
