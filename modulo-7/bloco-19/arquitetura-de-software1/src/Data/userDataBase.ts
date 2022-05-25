import { User } from "../types";
import { BaseDataBase } from "./baseDataBase";

export class UserDataBase extends BaseDataBase{
    public insertUser = async (user:User) => {
        try {
            await UserDataBase.connection("User_Arq").insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}