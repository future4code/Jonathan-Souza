import { AthleteInput, AthleteOutput } from './../model/athletes';
import { BaseDatabase } from "./baseDataBase";

export class AthletesDataBase extends BaseDatabase {
    private static TABLE_NAME = "competidores";

    public async insert(athlete:AthleteInput){
        await this.getConnection()
            .insert({
                id_competicao: athlete.idComp,
                atleta: athlete.name,
                valor: athlete.value,
                unidade: athlete.unity
            })
            .into(AthletesDataBase.TABLE_NAME);
    }

    public async getAthleteByName(name:string, competition:string):Promise<AthleteOutput>{
        const result = await this.getConnection()
            .select("*")
            .where({
                id_competicao: competition,
                atleta: name
            })
            .from(AthletesDataBase.TABLE_NAME)
        return result[0]
    }

    public async changeValue(athlete:AthleteInput):Promise<void>{
        await this.getConnection()
            .update({valor: athlete.value})
            .where({
                id_competicao: athlete.idComp,
                atleta: athlete.name
            })
            .from(AthletesDataBase.TABLE_NAME)

    }
}