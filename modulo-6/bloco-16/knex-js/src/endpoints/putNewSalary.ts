import { Request, Response } from "express"
import { connection } from "."


export const putNewSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            "salary": salary
        })
        .where({
            id: id
        })
  return ;
}