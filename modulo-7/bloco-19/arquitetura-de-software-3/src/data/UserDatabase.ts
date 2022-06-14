import { createUserBaseDTO, userOutputDTO } from "../model/model";
import { userOutput } from "../services/userOutput";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  async create(user: createUserBaseDTO): Promise<void> {
    await UserDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  async find ():Promise<any> {   
    const result = await UserDatabase.connection("LABEFLIX_USER")
    let output:userOutputDTO[] = userOutput(result)

    return output
  }
}
