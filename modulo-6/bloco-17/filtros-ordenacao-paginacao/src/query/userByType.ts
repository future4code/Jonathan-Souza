import { connection } from "../data/connection"

export async function userByType(sort:string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select()
    .where("type", "like", `%${sort}%`)

    return result
}