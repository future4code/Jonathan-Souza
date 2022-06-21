import express, { Request, Response } from "express"
import { UserBussines } from "../bussines/userBussines";

export class UserController {
    async create(req:Request, res:Response){
        try {
            const { email, password, role } = req.body;

            const input = {
                email,
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
}