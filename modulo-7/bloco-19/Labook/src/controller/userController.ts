import { Request, Response } from "express";
import { UserBussines } from "../bussines/userBussines";
import { userInput } from "../model/userDTO";

export class UserController {
    async create (req:Request, res:Response):Promise<void>{
        try {
            const { name, email, password } = req.body

            const input:userInput = {
                name,
                email,
                password
            }

            const userBussines = new UserBussines
            userBussines.create(input)

            res.status(201).send({message: "Usario criado com sucesso!"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}