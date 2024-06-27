import { UserUpdateDTO } from "../../users/dto/user.update.dto";
import { PostUpdateDTO } from "../../posts/dto/post.update.dto";
export declare class CommentUpdateDTO {
    message: string;
    author: UserUpdateDTO;
    post: PostUpdateDTO;
}
