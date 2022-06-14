import { UserDatabase } from "../data/UserDatabase"
import { generateId } from "../services/generateID"
import { createUserDTO } from "../model/model"
import { CustomError, invalidEmail } from "../error/customError"
import { checkEmail } from "../services/checkEmail"

export class UserBusiness {
  async create(request: createUserDTO):Promise<void> {
    if (!request.email || !request.name || !request.password) {
      throw new CustomError(400, "os campos (email, name e password)")
    }

    const emailCheck = await checkEmail(request.email)    
    if (emailCheck.email === request.email){
      throw new invalidEmail()
    }

    const id:string = generateId()

    const inputData = {
      id,
      email: request.email,
      name: request.name,
      password: request.password
    }

    const userDatabase = new UserDatabase()
    await userDatabase.create(inputData)
  }

  async find ():Promise<any> {
    const userDB = new UserDatabase()
    return await userDB.find()
  }
}
