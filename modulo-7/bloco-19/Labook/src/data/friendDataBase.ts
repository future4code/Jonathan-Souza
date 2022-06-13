import { friendDTO, friendFeedInput, friendInput } from "../model/friendDTO";
import { DataBase } from "./dataBase";

export class FriendDataBase extends DataBase {    
    private static TABLE_NAME = "labook_friends"
    
    async create (req:friendDTO):Promise<void>{ 
        await DataBase.connection
        .insert({
            id: req.id,
            user_id: req.userId,
            friend_id: req.friendId
        })
        .into(FriendDataBase.TABLE_NAME)
    }

    async find (req:friendInput):Promise<any>{
        const result = await DataBase.connection
        .select("*")
        .where({user_id: req.userId, friend_id: req.friendId})
        .orWhere({user_id: req.friendId, friend_id: req.userId})
        .from(FriendDataBase.TABLE_NAME)

        return result
    }

    async delete (req:friendInput):Promise<void>{
        await DataBase.connection
        .where({user_id: req.userId, friend_id: req.friendId})
        .orWhere({user_id: req.friendId, friend_id: req.userId})
        .del()
        .from(FriendDataBase.TABLE_NAME)
    }

    async feed (req:friendFeedInput):Promise<any>{
        const result = await DataBase.connection
        .select("*")
        .from(FriendDataBase.TABLE_NAME)
        .leftJoin("labook_posts", "labook_friends.friend_id", "labook_posts.author_id")
        .where({user_id: req.userId})
        .orderBy("labook_posts.created_at", "desc")

        return result
    }
}