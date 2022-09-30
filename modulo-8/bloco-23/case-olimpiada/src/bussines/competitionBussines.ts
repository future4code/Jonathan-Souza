import {
    CustomError,
    InvalidIdComp,
    NotFound } from '../error/customError';
import { competitionRakingOutput } from '../model/competition';
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

        let ranking = result.map((item: competitionRakingOutput, index) =>{
                let rank = {
                    "competicao": item.nome,
                    "atleta": item.atleta,
                    "pontuacao": item.valor + " " + item.unidade,
                    "ranking": item.ranking = 1 + index
                }
                return rank        
            }
        );
        
        return ranking
    }

    public async changeStatus(id:string):Promise<any>{
        if(await this.checkDataComp.checkID(id)){            
            throw new InvalidIdComp           
        }

        if(await this.checkDataComp.checkStatus(id)){           
            throw new CustomError("This competition its over", 406)
        }

        await new CompetitionDataBase().changeStatus(id)
        const result = await new CompetitionDataBase().getRaking(id)

        let ranking = result.map((item: competitionRakingOutput, index) =>{
                let rank = {
                    "competicao": item.nome,
                    "atleta": item.atleta,
                    "pontuacao": item.valor + " " + item.unidade,
                    "ranking": item.ranking = 1 + index
                }
                return rank        
            }
        );
        
        return ranking
    }
}