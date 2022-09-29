import { AthleteInput } from './../model/athletes';
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
}