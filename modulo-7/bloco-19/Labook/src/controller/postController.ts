import { Request, Response } from "express";
import { PostBussines } from "../bussines/postBussines";
import { postInput } from "../model/postDTO";

export class PostController {
    
    async create (req:Request, res:Response):Promise<void>{
        try { 
            const { photo, description, type, authorId } = req.body
    
            const input:postInput = {
                photo, 
                description, 
                type, 
                authorId
            }
    
            const postBussines = new PostBussines().create(input)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    async find (req:Request, res:Response):Promise<void>{
        try {
            const { id } = req.params

            const input = {id}

            const postBussines = new PostBussines()
            const result = await postBussines.find(input)

            res.status(200).send(result)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}