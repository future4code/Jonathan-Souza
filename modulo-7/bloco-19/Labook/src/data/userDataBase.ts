import { CreateUserDTO } from "../model/userDTO";
import { DataBase } from "./dataBase";

export class UserDataBase extends DataBase {
    private static TABLE_NAME = "labook_users"

    async create (user:CreateUserDTO): Promise<void> {
        await UserDataBase.connection
        .insert({
           id : user.id,
           name: user.name,
           email: user.email,
           password: user.password
        })
        .into(UserDataBase.TABLE_NAME)
    }
}