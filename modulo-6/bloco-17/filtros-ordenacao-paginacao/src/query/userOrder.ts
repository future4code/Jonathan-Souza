import { connection } from "../data/connection"

export async function userOrder(sort:string, order:string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .orderBy(sort, order)

    return result
}