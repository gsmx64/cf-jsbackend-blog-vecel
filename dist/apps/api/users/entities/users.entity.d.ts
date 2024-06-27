import { ROLES } from "../../constants/roles";
import { IUser } from "../interfaces/user.interface";
import { BaseEntity } from "../../config/base.entity";
import { CommentsEntity } from "../../comments/entities/comments.entity";
import { PostsEntity } from "../../posts/entities/posts.entity";
import { CategoriesEntity } from "../../categories/entities/categories.entity";
import { USER_STATUS } from "../../constants/user.status";
export declare class UsersEntity extends BaseEntity implements IUser {
    username: string;
    email: string;
    password: string;
    status: USER_STATUS;
    role: ROLES;
    karma: number;
    avatar: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    country: string;
    posts: PostsEntity[];
    categories: CategoriesEntity[];
    comments: CommentsEntity[];
}
