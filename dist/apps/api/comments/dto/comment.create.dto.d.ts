import { UserCreateDTO } from "../../users/dto/user.create.dto";
import { PostCreateDTO } from "../../posts/dto/post.create.dto";
export declare class CommentCreateDTO {
    message: string;
    author: UserCreateDTO;
    post: PostCreateDTO;
}
