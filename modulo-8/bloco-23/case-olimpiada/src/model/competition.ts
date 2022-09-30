export class Competition{
    constructor(
    private id: string,
    private name: string,
    private current?: number,
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getCurrent(){
        return this.current;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setCurrent(current: number){
        this.current = current;
    }


    static toAthletetModel(athlete: any): Competition {
        return new Competition(athlete.id, athlete.name, athlete.current);
    }
}

export interface competitionOutput {
    id: string,
    nome: string,
    encerrada: number
}

export interface competitionRakingOutput {
    nome: string,
    atleta: string,
    valor: string,
    unidade: string,
    ranking?: number
}