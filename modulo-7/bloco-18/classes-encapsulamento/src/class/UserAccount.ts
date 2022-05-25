import { Transaction } from "./Transaction ";

type UserInfo = {
    cpf: string,
    name: string,
    age: number
}

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
    public getBalance(): number {
        return this.balance
    }

    public getTransactions = (): Transaction[] => {
        return this.transactions
    }

    public getUserInfo = (): UserInfo => {
        let userInfo = {
            name: this.name, 
            cpf: this.cpf, 
            age: this.age
        }
         return userInfo
    }
    
}