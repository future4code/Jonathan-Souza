import { Request, Response } from "express"
import { connection } from "."


export const getAverageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({
            gender: gender
        })

  return result[0].average;
}