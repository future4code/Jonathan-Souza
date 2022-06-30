import { userSignupDTO } from './../model/userDTO';
import { DataBase } from "./dataBase";

export class UserDataBase extends DataBase {
    private static TABLE_NAME = "user_aut"

    public async signup(input:userSignupDTO):Promise<void> {
        await DataBase.connection
            .insert({
                id: input.id,
                email: input.email,
                password: input.password,
                role: input.role
            })
            .into(UserDataBase.TABLE_NAME)
    }

    public async getUserByEmail (email: string): Promise<any> {
        const result = await DataBase.connection
          .select("*")
          .from(UserDataBase.TABLE_NAME)
          .where({ email });
     
        return result[0];
    }

    public async getUserById (id: string): Promise<any> {
        const result = await DataBase.connection
          .select("*")
          .from(UserDataBase.TABLE_NAME)
          .where({ id });
     
        return result[0];
    }

}