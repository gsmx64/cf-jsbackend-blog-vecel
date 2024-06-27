import { PostUpdateDTO } from "../../posts/dto/post.update.dto";
import { UserUpdateDTO } from "../../users/dto/user.update.dto";
import { PUBLISH_STATUS } from "../../constants/publish.status";
export declare class CategoryUpdateDTO {
    title: string;
    description: string;
    image: string;
    status: PUBLISH_STATUS;
    author: UserUpdateDTO;
    posts: PostUpdateDTO[];
}
