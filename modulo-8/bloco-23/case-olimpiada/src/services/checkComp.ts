import { ICheckDataComp } from "../bussines/ports"
import { CompetitionDataBase } from "../data/competitionDataBase"

export class CheckDataComp implements ICheckDataComp{
    public async checkID (id:string){
        const competitionData = await new CompetitionDataBase().getCompetitionByID(id)       
        
        if(!competitionData){
            return true
        }else{
            return false
        }
    }

    public async checkStatus(id:string){
        const competitionData = await new CompetitionDataBase().getCompetitionByID(id)
        
       if(competitionData.encerrada === 0){
            return false
       }else{
            return true
       }
    }

    public async checkCompetition(id:string):Promise<boolean>{
        const competitionData = await new CompetitionDataBase().getCompetitionByID(id)

        if(!competitionData.nome.includes("lançamento de dardos")){
            return true
        }else{
            return false
        }
       
    }
}
