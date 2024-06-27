import { PostsEntity } from "../../posts/entities/posts.entity";
import { CommentsEntity } from "../../comments/entities/comments.entity";
export interface IUser {
    username: string;
    email: string;
    password: string;
    status: string;
    role: string;
    karma: number;
    avatar: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    country: string;
    posts: PostsEntity[];
    comments: CommentsEntity[];
}
export interface IUserPassword {
    current_password: string;
    password: string;
    repeat_password: string;
    data: string;
}
