import { connection } from ".";
const { v4: uuidv4 } = require('uuid');

export const createUser =async (name:string, nickname:string, email:string): Promise<void> => {
    await connection("TodoListUser")
    .insert({
        "id": uuidv4(),
        "name": name,
        "nickname": nickname,
        "email": email
    })
   
    return
}