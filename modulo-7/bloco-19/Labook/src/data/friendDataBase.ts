import { friendDTO, friendInput } from "../model/friendDTO";
import { DataBase } from "./dataBase";

export class FriendDataBase extends DataBase {    
    private static TABLE_NAME = "labook_friends"
    
    async create (post:friendDTO):Promise<void>{ 
        await DataBase.connection
        .insert({
            id: post.id,
            user_id: post.userId,
            friend_id: post.friendId
        })
        .into(FriendDataBase.TABLE_NAME)
    }

    async find (get:friendInput):Promise<any>{
        const result = await DataBase.connection
        .select("*")
        .where({user_id: get.userId, friend_id: get.friendId})
        .orWhere({user_id: get.friendId, friend_id: get.userId})
        .from(FriendDataBase.TABLE_NAME)

        return result
    }
}