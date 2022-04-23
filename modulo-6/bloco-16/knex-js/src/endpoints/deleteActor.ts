import { Request, Response } from "express"
import { connection } from "."


export const deleteActor = async (id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where({
            id: id
        })
  return ;
}