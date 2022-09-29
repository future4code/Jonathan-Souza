import {
    CustomError,
    InvalidIdComp,
    NotFound } from '../error/customError';
import { CompetitionDataBase } from './../data/competitionDataBase';
import { 
    ICheckDataComp,
    IGenerateId 
} from "./ports";

export class CompetitionBussines {
    constructor(
        private generateID: IGenerateId,
        private checkDataComp: ICheckDataComp
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
            throw new NotFound
        }
        
        return result
    }

    public async getRaking(id:string):Promise<any>{
        const result = await new CompetitionDataBase().getRaking(id)        

        if(!result){
            throw new InvalidIdComp
        }

        return result
    }

    public async changeStatus(id:string):Promise<void>{
        if(await this.checkDataComp.checkID(id)){            
            throw new InvalidIdComp           
        }

        if(await this.checkDataComp.checkStatus(id)){           
            throw new CustomError("This competition its over", 406)
        }

        await new CompetitionDataBase().changeStatus(id)
    }
}