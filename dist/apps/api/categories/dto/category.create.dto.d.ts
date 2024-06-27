import { PostCreateDTO } from "../../posts/dto/post.create.dto";
import { UserCreateDTO } from "../../users/dto/user.create.dto";
import { PUBLISH_STATUS } from "../../constants/publish.status";
export declare class CategoryCreateDTO {
    title: string;
    description: string;
    image: string;
    status: PUBLISH_STATUS;
    author: UserCreateDTO;
    posts: PostCreateDTO[];
}
