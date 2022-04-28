import { connection } from "../data/connection"

export async function allUsers():Promise<any> {
    const result = await connection("aula48_exercicio")

    return result
}