import { CommentCreateDTO } from "../../comments/dto/comment.create.dto";
import { ROLES } from "../../constants/roles";
import { PostCreateDTO } from "../../posts/dto/post.create.dto";
import { CategoryCreateDTO } from "../../categories/dto/category.create.dto";
import { USER_STATUS } from "../../constants/user.status";
export declare class UserCreateDTO {
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
    posts: PostCreateDTO[];
    categories: CategoryCreateDTO[];
    comments: CommentCreateDTO[];
}
