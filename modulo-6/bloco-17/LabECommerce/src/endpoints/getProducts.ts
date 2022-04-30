import { Express, Request, Response } from "express"
import { findProduct } from "./querys/findProduct"

export const getProducts = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
    try {
        let result = await findProduct()

        res.status(200).send(result)
    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage)
    }
}