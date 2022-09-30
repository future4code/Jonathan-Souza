import { AthleteInput } from './../model/athletes';
import {
    CustomError,
    InvalidName,
    InvalidIdComp
 }from './../error/customError';
import {
    IGenerateId,
    ICheckDataComp
} from './ports';
import { AthletesDataBase } from '../data/athletesDataBase';

export class AthletesBussines {
    constructor(
        private generateID: IGenerateId,
        private checkDataComp: ICheckDataComp
    ){ }

    public async insert(athlete:AthleteInput):Promise<void>{
        let { idComp, name, value, unity } = athlete
        const athleteDB = new AthletesDataBase()

        if(name.length < 3){
            throw new InvalidName
        }

        if(Number(value) < 0){
            throw new CustomError("Invalid Value", 400)
        }
        
        if(unity.length > 1){
            throw new CustomError("Invalid Unity", 400)
        }

        if(await this.checkDataComp.checkID(idComp)){            
            throw new InvalidIdComp           
        }

        if(await this.checkDataComp.checkStatus(idComp)){           
            throw new CustomError("This competition its over", 406)
        }

        if(await this.checkDataComp.checkCompetition(idComp)){
            console.log("entrei sem ser o lançamento de dardos");
            
            athleteDB.insert(athlete)
        }

        const checkValue = await athleteDB.getAthleteByName(name, idComp)

        if(!checkValue){
            athleteDB.insert(athlete)
        }else if(checkValue.valor < value){
            athleteDB.changeValue(athlete)
        }
        
    }
}