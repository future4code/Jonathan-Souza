import { Express, Request, Response } from "express"
import { findUser } from "./querys/findUser"

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
    
        let result = await findUser()

        res.status(200).send(result)
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}