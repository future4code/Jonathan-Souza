import { User } from "../model/user";
import { BaseDatabase } from "./baseDataBase";

export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "amaro_users";

    public async signup(user: User): Promise<void> {
        await this.getConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
            .into(UserDataBase.TABLE_NAME);
    }

    public async getUserByEmail(email: string): Promise<User> {
        const result = await this.getConnection()
            .select("*")
            .where({ email })
            .from(UserDataBase.TABLE_NAME)

            const user = User.toUserModel(result[0]);
        return user
    }
}