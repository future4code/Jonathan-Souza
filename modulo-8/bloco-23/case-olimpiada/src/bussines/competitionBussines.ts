import { NotFound } from '../error/customError';
import { CompetitionDataBase } from './../data/competitionDataBase';
import { IGenerateId } from "./ports";

export class CompetitionBussines {
    constructor(
        private generateID: IGenerateId
    ){}

    public async create(competition:any):Promise<void>{
        const id = this.generateID.generate()

        const input = {
            id,
            name: competition.name
        }

        await new CompetitionDataBase().create(input)
    }

    public async getAll():Promise<any> {
        const result = await new CompetitionDataBase().getAll()
        
        if(!result){
            throw new NotFound()
        }
        
        return result
    }
}