import { IGenerateId } from './ports';
import {  }

export class AthletesBussines {
    constructor(
        private generateID: IGenerateId 
    ){ }

    public async insert(input:any):Promise<void>{
        let { idComp, athlete, value, unity } = input

        
        
    }
}