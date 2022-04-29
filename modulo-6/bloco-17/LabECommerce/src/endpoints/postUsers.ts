import { Express, Request, Response } from "express"
import { registerUser } from "./querys/registerUser";
const { v4: uuidv4 } = require('uuid');

export const postUsers = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
        let id = uuidv4()
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password

        if(!name){
            errorCode = 400
            throw new Error("you must fill the field *name*")
        }
        if(!password){
            errorCode = 400
            throw new Error("you must fill the field *password*")
        }
        if(!email){
            errorCode = 400
            throw new Error("you must fill the field *email*")
        }

        registerUser(id,name,email,password)

        res.status(200).send("successfully registered user")
    } catch (error:any) {
        console.log(error)
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}