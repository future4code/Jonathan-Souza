import { Competition, competitionOutput } from "../model/competition";
import { BaseDatabase } from "./baseDataBase";

export class CompetitionDataBase extends BaseDatabase {
    private static TABLE_NAME = "competicao";

    public async create(competition:any):Promise<void>{
        await this.getConnection()
            .insert({
                id: competition.id,
                nome: competition.name
            })
            .into(CompetitionDataBase.TABLE_NAME);
    }

    public async getAll():Promise<competitionOutput[]>{
        let result = await this.getConnection()
            .select("*")
            .from(CompetitionDataBase.TABLE_NAME)
        
        return result;
    }

    public async getCompetitionByID(id:string):Promise<competitionOutput>{
        let result = await this.getConnection()
            .select("*")
            .where({id})
            .from(CompetitionDataBase.TABLE_NAME)

        return result[0]
    }

    public async getRaking(id:string):Promise<any>{
        let result = await this.getConnection()
            .select("competicao.nome","competidores.atleta", "competidores.valor", "competidores.unidade")
            .orderBy("competidores.valor", "DESC")
            .leftJoin("competidores", "competicao.id", "competidores.id_competicao")
            .where({id_competicao: id})
            .from(CompetitionDataBase.TABLE_NAME)
            
        
        return result
    }

    public async changeStatus(id:string):Promise<void>{
        await this.getConnection()
            .update({encerrada: true})
            .where({id})
            .from(CompetitionDataBase.TABLE_NAME)

    }
}