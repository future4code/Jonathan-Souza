import express, {Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser } from "./createUser";
import { findUserById } from "./findUserById";
import { changeUser } from "./changeUser";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

// Endpoint que cria um usuario
app.post("/user", async (req:Request, res:Response) =>{
    let errorCode = 500
    try {
        const name = req.body.name 
        const nickname = req.body.nickname
        const email = req.body.email
        

        // checa se passaram no body o nome,nick e email
        if(!name){
            errorCode = 400
            throw new Error("you must fill the field *name*")
        }
        if(!nickname){
            errorCode = 400
            throw new Error("you must fill the field *nickname*")
        }
        if(!email){
            errorCode = 400
            throw new Error("you must fill the field *email*")
        }

        // chama a logica passando as informações necessarias para cria o user
        createUser(name,nickname,email)

        
        res.status(200).send({result: "user registration successful"})
    } catch (error:any) {
        res.status(errorCode).send({result: error.message})
    }
})

// Pegar usuario pelo id
app.get("/user/:id", async (req:Request, res:Response) =>{
    let errorCode = 500
    try {
        const id = req.params.id
        
        let result = await findUserById(id)
        
        if(!result){
            errorCode = 404
            throw new Error("user not found")
        }


        res.status(200).send({user: result})
    } catch (error:any) {
        res.status(errorCode).send({result: error.message})
    }
})

app.post("user/edit", async (req:Request, res:Response) =>{
    let errorCode = 500
    try {
        const id = req.params.body
        const name = req.body.name
        const nickname = req.body.nickname

        await changeUser(id, name, nickname)
        
        res.status(200).send({result: "successful data change"})
    } catch (error:any) {
        res.status(errorCode).send({result: "something wrong"})
    }
})