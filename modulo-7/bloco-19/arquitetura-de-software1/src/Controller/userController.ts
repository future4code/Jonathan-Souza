import { Request, Response } from "express";
import { UserBusiness } from "../Business/userBusiness";
import { User } from "../types";

export class UserController{
    public captureUser =async (
        req: Request,
        res: Response
    ) => {
        try {
            const { name, email, password } = req.body

            const input = {
                name,
                email,
                password
            }

            const userBussines = new UserBusiness()
            userBussines.createUser(input)

            res.status(201).send({ message: "Usuario criado com sucesso!"})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    public getUser =async (
        req:Request,
        res:Response
    ):Promise<any> => {
        try {
            const userBussines = new UserBusiness
            const result = await userBussines.getUser()
    
            res.status(200).send({message: result})
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}