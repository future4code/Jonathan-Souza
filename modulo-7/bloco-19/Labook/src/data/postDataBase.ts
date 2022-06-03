import { AuthenticationData, PostDTO } from "../model/postDTO";
import { DataBase } from "./dataBase";

export class PostDataBase extends DataBase {
    private static TABLE_NAME = "labook_posts"
    async create (post:PostDTO):Promise<void>{
        PostDataBase.connection
        .insert({
            id : post.id,
            photo: post.photo,
            description: post.description,
            type: post.type,
            author_id: post.authorId
        })
        .into(PostDataBase.TABLE_NAME)
    }

    async find (id:AuthenticationData):Promise<any>{
        const result = await PostDataBase.connection
        .select("*")
        .where({ id })
        .from(PostDataBase.TABLE_NAME)
        
        return result
    }
}