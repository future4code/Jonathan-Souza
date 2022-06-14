import { UserDatabase } from "../data/UserDatabase"
import { userOutputDTO } from "../model/model"

export const checkEmail = async (email:string) => {
    const alluser:userOutputDTO[] = await new UserDatabase().find()
    
    const checkEmail = alluser.find(e => e.email === email)
    
    return checkEmail
}