import { Express, Request, Response } from "express"
import { allUsers } from "../query/allUsers"
import { UsersByName } from "../query/UsersByName"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name as string
        let users

        if(!name){
            users = await allUsers()
        }else{
            users = await UsersByName(name)
        }     

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