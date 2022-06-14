import { UserDataBase } from "../data/userDataBase";
import { CreateUserDTO, userInput } from "../model/userDTO";
import { generateId } from "../services/generateID";

export class UserBussines {
    async create (user: userInput):Promise<void>{
        const { name, email, password } = user

        if (!name || !email || !password) {
           const message = '"name", "email" and "password" must be provided'
           throw new Error(message)
        }
        
        const id = generateId()

        const input:CreateUserDTO = {
            id,
            name,
            email,
            password
        }

        const userDB = await new UserDataBase()
        userDB.create(input)
    }
}