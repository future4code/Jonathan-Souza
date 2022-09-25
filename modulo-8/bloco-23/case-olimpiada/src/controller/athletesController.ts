import { Request, Response } from "express";
import { AthletesBussines } from "../bussines/athletesBussines";
import { IGenerateId } from "../bussines/ports";
import { EmptyFields } from "../error/customError";
import { GeneratorID } from "../services/generatorID";

const generatorID:IGenerateId = new GeneratorID
const athletesBussines = new AthletesBussines(generatorID)

export class AthletesController {
    public insert(req:Request, res:Response){
        try {
            let {idComp, athlete, value, unity} = req.body

            if(!idComp || !athlete || !value || !unity){
                throw new EmptyFields()
            }
            
            const input = {
                idComp,
                athlete,
                value,
                unity
            }

            athletesBussines.insert(input)

            res.status(201).send({message: "atleta adcionado com sucesso"})
        } catch (error:any) {
            res.status(error.code).send({error: error.message})
        }
    }
}