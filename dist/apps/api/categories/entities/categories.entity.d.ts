import { ICategory } from "../interfaces/category.interface";
import { BaseEntity } from "../../config/base.entity";
import { PostsEntity } from "../../posts/entities/posts.entity";
import { UsersEntity } from "../../users/entities/users.entity";
import { PUBLISH_STATUS } from "../../constants/publish.status";
export declare class CategoriesEntity extends BaseEntity implements ICategory {
    title: string;
    description: string;
    image: string;
    status: PUBLISH_STATUS;
    author: UsersEntity;
    posts: PostsEntity[];
}
