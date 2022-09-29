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

        const input = {
            idComp,
            name,
            value,
            unity
        }

        new AthletesDataBase().insert(input)
    }
}