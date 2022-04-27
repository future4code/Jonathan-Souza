import { Express, Request, Response } from "express"
import { userOrder } from "../query/userOrder"


export const getUserOrder = async(req: Request,res: Response): Promise<void> =>{
    try {
        let sort = req.params.sort as string
        let order = req.query.order as string
        
        if(!sort){
            sort = "email"
        }

        if(!order){
            order = "ASC"
        }

        let users = await userOrder(sort, order)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}