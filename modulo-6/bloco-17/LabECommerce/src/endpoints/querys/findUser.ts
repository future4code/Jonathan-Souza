import { connection } from "../../data/connection"

export async function findUser():Promise<any> {
    const result = await connection("labecommerce_users")
    
    return result[0]
}