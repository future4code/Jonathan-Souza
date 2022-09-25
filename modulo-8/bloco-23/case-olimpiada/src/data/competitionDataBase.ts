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

    public async getAll():Promise<any>{
        const result = await this.getConnection()
            .select("*")
            .from(CompetitionDataBase.TABLE_NAME)

        return result[0];
    }
}