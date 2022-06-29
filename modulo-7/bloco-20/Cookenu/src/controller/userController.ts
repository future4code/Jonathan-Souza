import express, { Request, Response } from "express"
import { UserBussines } from "../bussines/userBussines";

export class UserController {
    async signup(req:Request, res:Response){
        try {
            const { email, password, role, name } = req.body;

            const input = {
                email,
                name,
                password,
                role
            }

            const token = await new UserBussines().signup(input)
            res.status(201).send({message: "usuario criado", token})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }   
    }

    async login(req:Request, res:Response){
        try {
            const { email, password } = req.body;

            const input = {
                email,
                password
            }

            const token = await new UserBussines().login(input)
            res.status(200).send({message: "usuario logado", token})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }   
    }

    async profile(req:Request, res:Response){
        try {            
            const token = req.headers.authorization as string;

            const data = await new UserBussines().profile(token)
            res.status(200).send(data)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }   
    }

    async otherUserProfile(req:Request, res:Response){
        try {            
            const token = req.headers.authorization as string;
            const id = req.params.id as string
            
            
            const data = await new UserBussines().otherUserProfile(token, id)
            res.status(200).send(data)
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }   
    }
}