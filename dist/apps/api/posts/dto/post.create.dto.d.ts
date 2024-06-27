import { CategoryCreateDTO } from "../../categories/dto/category.create.dto";
import { UserCreateDTO } from "../../users/dto/user.create.dto";
import { CommentCreateDTO } from "../../comments/dto/comment.create.dto";
import { PUBLISH_STATUS } from "../../constants/publish.status";
export declare class PostCreateDTO {
    title: string;
    description: string;
    image: string;
    content: string;
    status: PUBLISH_STATUS;
    author: UserCreateDTO;
    category: CategoryCreateDTO;
    comments: CommentCreateDTO[];
}
