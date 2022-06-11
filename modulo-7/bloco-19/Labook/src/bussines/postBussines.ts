import { PostDataBase } from "../data/postDataBase";
import { AuthenticationData, PostDTO, postInput, postOutput } from "../model/postDTO";
import { generateId } from "../services/generateID";

export class PostBussines {
    async create(post:postInput):Promise<void> {
        const { photo, description, type, authorId } = post

        const id = generateId()

        const createPost:PostDTO = {
            id,
            photo,
            description,
            type,
            authorId
        }        
        await new PostDataBase().create(createPost)
    }

    async find (id:AuthenticationData):Promise<any> {
        
        const postDB = await new PostDataBase().find(id)
        
        if (!postDB[0]) {
            const message = "Post not found"
            throw new Error(message)
        }
   
        const post: postOutput = {
            id: postDB[0].id,
            photo: postDB[0].photo,
            description: postDB[0].description,
            type: postDB[0].type,
            createdAt: postDB[0].created_at,
            authorId: postDB[0].author_id,
        }

        return post

    }
}