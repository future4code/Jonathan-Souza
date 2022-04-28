import { connection } from "../data/connection"

export async function UsersByName(name:string):Promise<any> {
    const result = await connection("aula48_exercicio")
    .select()
    .where("name", "like", `%${name}%`)

    return result
}