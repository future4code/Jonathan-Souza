import express, { Request, Response } from "express";
import { UserBussines } from "../business/userBussines";
import { Authenticator } from "../services/authenticator";
import { GeneratorID } from "../services/generatorID";
import { HashManager } from "../services/hashManager";
import { UserInput } from "../model/user";
import { EmptyFields } from "../error/customError";

const hashManager = new HashManager()
const authenticator = new Authenticator()
const generatorID = new GeneratorID()
const userBussines = new UserBussines(hashManager, authenticator, generatorID);

export class UserController {
    public async signup(req: Request, res: Response) {
        try{
            if(!req.body.email || !req.body.password || !req.body.name){
                throw new EmptyFields();
            }
            console.log("cheguei no controller");
            const input = {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                role: req.body.role
            }

            const token = await userBussines.signup(input)
            res.status(201).send({message: "Usuário criado com sucesso!"})
        } catch (error:any) {
            res.status(400).send({error: error.message || error.sqlMessage})
        }
    }

    public async login(req: Request, res: Response) {
        try{
            if(!req.body.email || !req.body.password){
                throw new EmptyFields();
            }

            const input = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await userBussines.login(input)
            res.status(201).send({message: "Usuario logado com sucesso!", token})
        } catch (error:any) {
            res.status(500).send({error: error.sqlMessage || error.message})
        }
    }
}