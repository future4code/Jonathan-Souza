import { Request, Response } from "express";
import { AthletesBussines } from "../bussines/athletesBussines";
import { ICheckDataComp, IGenerateId } from "../bussines/ports";
import { EmptyFields } from "../error/customError";
import { AthleteInput } from "../model/athletes";
import { CheckDataComp } from "../services/checkComp";
import { GeneratorID } from "../services/generatorID";

const generatorID:IGenerateId = new GeneratorID
const checkDataComp: ICheckDataComp = new CheckDataComp
const athletesBussines = new AthletesBussines(generatorID, checkDataComp)

export class AthletesController {
    public insert(req:Request, res:Response){
        try {
            let {idComp, name, value, unity} = req.body

            if(!idComp || !name || !value || !unity){
                throw new EmptyFields()
            }
            
            const input:AthleteInput = {
                idComp,
                name,
                value,
                unity
            }

            athletesBussines.insert(input)

            res.status(201).send({message: "Athlete score registered"})
        }catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}