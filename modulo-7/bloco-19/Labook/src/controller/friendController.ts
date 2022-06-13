import { Request, Response } from "express";
import { FriendBussines } from "../bussines/friendBussines";
import { friendFeedInput, friendInput } from "../model/friendDTO";

export class FriendController{
    async create(req:Request, res:Response){
        try {
            const {userId, friendId} = req.body

            const input:friendInput = {
                userId,
                friendId
            }
    
            await new FriendBussines().create(input)
            res.status(201).send({message: "amigo adcionado com sucesso!"})
        } catch (error:any) {
            res.status(500).send({message: error.sqlMessage || error.message})
        }
    }

    async delete(req:Request, res:Response){
        try {
            const {userId, friendId} = req.body

            const input:friendInput = {
                userId,
                friendId
            }
    
            await new FriendBussines().delete(input)
            res.status(201).send({message: "amigo deletado com sucesso!"})
        } catch (error:any) {
            res.status(500).send({message: error.sqlMessage || error.message})
        }
    }

    async feed (req:Request, res:Response){
        try {
            const {userId} = req.params

            const input:friendFeedInput = {
                userId,
            }
    
            const result = await new FriendBussines().feed(input)
            res.status(201).send(result)
        } catch (error:any) {
            res.status(500).send({message: error.sqlMessage || error.message})
        }
    }
}