import { CategoryUpdateDTO } from "../../categories/dto/category.update.dto";
import { UserUpdateDTO } from "../../users/dto/user.update.dto";
import { CommentUpdateDTO } from "../../comments/dto/comment.update.dto";
import { PUBLISH_STATUS } from "../../constants/publish.status";
export declare class PostUpdateDTO {
    title: string;
    description: string;
    image: string;
    content: string;
    status: PUBLISH_STATUS;
    author: UserUpdateDTO;
    category: CategoryUpdateDTO;
    comments: CommentUpdateDTO[];
}
