import { CommentUpdateDTO } from "../../comments/dto/comment.update.dto";
import { CategoryUpdateDTO } from "../../categories/dto/category.update.dto";
import { PostUpdateDTO } from "../../posts/dto/post.update.dto";
import { ROLES } from "../../constants/roles";
import { USER_STATUS } from "../../constants/user.status";
export declare class UserUpdateDTO {
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
    posts: PostUpdateDTO[];
    categories: CategoryUpdateDTO[];
    comments: CommentUpdateDTO[];
}
