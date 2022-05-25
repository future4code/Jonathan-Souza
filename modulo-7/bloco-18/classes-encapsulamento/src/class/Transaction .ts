export class Transaction  {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        this.date = date
        this.value = value
        this.description = description
    }

    public getDesciption = (): string => {
        return this.description
    }
    public getValue = (): number => {
        return this.value
    }
    public getdate = (): string => {
        return this.date
    }
}