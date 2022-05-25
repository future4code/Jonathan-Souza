import { User } from "../types";
import {v4 as generateId} from "uuid"
import { UserDataBase } from "../Data/userDataBase";


export class UserBusiness{
    public createUser = async (input:any) => {
        try {
            const { name, email, password } = input

            if(!name || !email || !password){
                throw new Error("Um dos campos 'name' 'email' ou 'password' deve ser preenchido")
            }

            const id = generateId()

            const userInput:User = {
                id,
                name,
                email,
                password
            }

            const userDB = new UserDataBase()
            userDB.insertUser(userInput)

        } catch (error:any) {
            throw new Error(error.message)
        }
    }

    public getUser = async ():Promise<any> => {
        try {           
                
            const userDB = new UserDataBase()
            const result = await userDB.getUsers()
            console.log(result);
            
            return result
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}