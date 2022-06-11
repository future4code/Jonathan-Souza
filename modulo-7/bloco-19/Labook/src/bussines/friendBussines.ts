import { FriendDataBase } from "../data/friendDataBase";
import { friendDTO, friendInput } from "../model/friendDTO";
import { CheckFriends } from "../services/checkFriends";
import { generateId } from "../services/generateID";

export class FriendBussines {
    async create(post:friendInput):Promise<void> {
        const {userId, friendId} = post

        if (!userId || !friendId){
            const message = "todos os campos devem ser preenchidos"
            throw new Error(message)
        }

        const checkFriends = await CheckFriends(userId,friendId)
        console.log(checkFriends);
        
        if (checkFriends){
            const message = "esses usuarios ja são amigos"
            throw new Error(message)
        }

        const id = generateId()

        const input:friendDTO = {
            id,
            userId,
            friendId
        }

    //    await new FriendDataBase().create(input) 
    }
}