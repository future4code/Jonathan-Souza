import { Request, Response } from "express"
import { connection } from "."


export const getCountActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	
  const count = result[0][0].count;
  return count;
}
