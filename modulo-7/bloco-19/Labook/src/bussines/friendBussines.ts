import { FriendDataBase } from "../data/friendDataBase";
import { friendDTO, friendFeedInput, friendInput } from "../model/friendDTO";
import { CheckFriends } from "../services/checkFriends";
import { generateId } from "../services/generateID";

export class FriendBussines {
    async create(request:friendInput):Promise<void> {
        const {userId, friendId} = request

        if (!userId || !friendId){
            const message = "todos os campos devem ser preenchidos"
            throw new Error(message)
        }

        const checkFriends = await CheckFriends(userId,friendId)
    
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

       await new FriendDataBase().create(input) 
    }

    async delete(request:friendInput):Promise<void> {
        const {userId, friendId} = request

        if (!userId || !friendId){
            const message = "todos os campos devem ser preenchidos"
            throw new Error(message)
        }

        const checkFriends = await CheckFriends(userId,friendId)
    
        if (!checkFriends){
            const message = "Esses usuarios não são amigos"
            throw new Error(message)
        }

        const input:friendInput = {
            userId,
            friendId
        }

        await new FriendDataBase().delete(input)
    }

    async feed (req:friendFeedInput):Promise<any> {

        if(!req){
            const message = "necessario id do usuario"
            throw new Error(message)
        }

        const feed = await new FriendDataBase().feed(req)

        return feed
    }
}