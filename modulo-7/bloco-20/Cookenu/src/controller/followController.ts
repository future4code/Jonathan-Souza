import { FollowBussines } from './../bussines/followBussines';
import { Request, Response } from "express";

export class FollowController {

    public async followUser(req:Request, res:Response){
        try {            
            const { userToFollowId } = req.body
                   
            const token = req.headers.authorization as string

            const input = {
                userToFollowId,
                token
            }
                        
            await new FollowBussines().followUser(input)

            res.status(200).send({message: "Seguido com sucesso"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        } 
    }

    public async unFollowUser(req:Request, res:Response){
        try {            
            const { userToUnfollowId } = req.body
                   
            const token = req.headers.authorization as string

            const input = {
                userToUnfollowId,
                token
            }
                        
            await new FollowBussines().unFollowUser(input)

            res.status(200).send({message: "Deixou de seguir com sucesso"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        } 
    }
}