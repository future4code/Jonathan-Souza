import {
    Request,
    Response 
} from "express";
import { CompetitionBussines } from "../bussines/competitionBussines";
import {
    ICheckDataComp,
    IGenerateId
} from "../bussines/ports";
import { EmptyFields } from "../error/customError";
import { CheckDataComp } from "../services/checkCompId";
import { GeneratorID } from "../services/generatorID";

const generatorID:IGenerateId = new GeneratorID;
const checkDataComp: ICheckDataComp = new CheckDataComp
const competitionBussines = new CompetitionBussines(generatorID, checkDataComp)

export class CompetitionController{
    public async create(req:Request, res:Response){
        try {
            const name =  req.body.name
            
            if(!name){
                throw new EmptyFields
            }

            const input = {
                name
            }

            await competitionBussines.create(input)

            res.status(201).send({message: "competition started"})
        }catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    public async getAll(req:Request, res:Response){
        try {
            const competition = await competitionBussines.getAll()

            res.status(200).send({message: competition})
        }catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    public async getRaking(req:Request, res:Response){
        try {
            const id = req.params.id

            if(!id){
                throw new EmptyFields
            }

            const ranking = await competitionBussines.getRaking(id)

            res.status(200).send({message: ranking})
        }catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    public async changeStatus(req:Request, res:Response){
        try {
            const id = req.params.id

            if(!id){
                throw new EmptyFields
            }

            await competitionBussines.changeStatus(id)

            res.status(200).send({message: "competition closed"})
        }catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}