import { connection } from ".";


export const findUserById =async (id:string): Promise<any> => {
    const result = await connection("TodoListUser")
    .where({
        "id": id
    })
   
    return result[0]
}