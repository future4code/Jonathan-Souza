import { Express, Request, Response } from "express"
import { userByType } from "../query/userByType"


export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type = req.params.type as string
        
        let users = await userByType(type)

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