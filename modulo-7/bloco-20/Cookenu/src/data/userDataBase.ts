import { userSignupDTO } from './../model/userDTO';
import { DataBase } from "./dataBase";

export class UserDataBase extends DataBase {
    private static TABLE_NAME = "cook_users"

    public async signup(input:userSignupDTO):Promise<void> {
        console.log(input);
        
        await DataBase.connection
            .insert({
                id: input.id,
                name: input.name,
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