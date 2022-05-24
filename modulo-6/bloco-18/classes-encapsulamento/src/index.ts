import { app } from "./app";
import { Transaction } from "./class/Transaction ";
import { UserAccount } from "./class/UserAccount";
import { Bank } from "./class/Bank";


const teste = new Transaction("transferindo 1", 20, "10/04/2022")
const teste1 = new Transaction("transferindo 2", 40, "10/05/2022")

const teste2 = new UserAccount("111.111.111-11", "user1", 18)

const userArray = []
userArray.push(teste2)

const teste3 = new Bank(userArray)

console.log((teste1.getDesciption(), teste2.getUserInfo()));

console.log(teste2.getTransactions());

console.log(teste3);