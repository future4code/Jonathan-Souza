import { connection } from "../../data/connection"

export async function findProduct():Promise<any> {
    const result = await connection("labecommerce_products") 
    return result
}