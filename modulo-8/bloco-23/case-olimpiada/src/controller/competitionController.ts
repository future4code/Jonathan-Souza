import { Request, Response } from "express";
import { CompetitionBussines } from "../bussines/competitionBussines";
import { IGenerateId } from "../bussines/ports";
import { GeneratorID } from "../services/generatorID";

const generatorID:IGenerateId = new GeneratorID();
const competitionBussines = new CompetitionBussines(generatorID)

export class CompetitionController{
    public async create(req:Request, res:Response){
        try {
            const input = {
                name: req.body.name
            }

            await competitionBussines.create(input)

            res.status(201).send({message: "competição iniciada"})
        } catch (error:any) {
            res.status(500).send({error: error.message})
        }
    }

    public async getAll(req:Request, res:Response){
        try {
            const competition = await competitionBussines.getAll()

            res.status(200).send({message: competition})
        } catch (error:any) {
            res.status(500).send({error: error.message})
        }
    }
}