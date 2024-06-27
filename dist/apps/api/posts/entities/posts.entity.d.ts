import { IPost } from "../interfaces/post.interface";
import { BaseEntity } from "../../config/base.entity";
import { CategoriesEntity } from "../../categories/entities/categories.entity";
import { UsersEntity } from "../../users/entities/users.entity";
import { CommentsEntity } from "../../comments/entities/comments.entity";
import { PUBLISH_STATUS } from "../../constants/publish.status";
export declare class PostsEntity extends BaseEntity implements IPost {
    title: string;
    description: string;
    image: string;
    content: string;
    status: PUBLISH_STATUS;
    author: UsersEntity;
    category: CategoriesEntity;
    comments: CommentsEntity[];
}
