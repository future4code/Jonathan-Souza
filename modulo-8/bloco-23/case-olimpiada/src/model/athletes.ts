export class Athlete{
    constructor(
    private idCompetition: string,
    private name: string,
    private value: string,
    private unity: string 
    ){}

    getIdCompetition(){
        return this.idCompetition;
    }

    getName(){
        return this.name
    }

    getValue(){
        return this.value;
    }

    getUnity(){
        return this.unity;
    }

    setIdCompetition(idCompetition: string){
        this.idCompetition = idCompetition;
    }

    setName(name: string){
        this.name = name;
    }

    setValue(value: string){
        this.value = value;
    }

    setUnity(unity: string){
        this.unity = unity;
    }

    static toAthletetModel(athlete: any): Athlete {
        return new Athlete(athlete.idCompetition, athlete.name, athlete.value, athlete.unity);
    }
}

export interface AthleteInput {
    idComp: string;
    name: string;
    value: string;
    unity: string
}


export interface AthleteOutput{
    id_competicao: string;
    nome: string;
    valor: string;
    unidade: string
}