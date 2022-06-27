import { UserNotFound } from './../error/customError';
import { UserDataBase } from './../data/userDataBase';


export async function checkUserId (id:string):Promise<boolean> {
    const userDB = await new UserDataBase()

    const user = await userDB.getUserById(id)

    if (user) {
        return true
    }else{
        return false
    }
}