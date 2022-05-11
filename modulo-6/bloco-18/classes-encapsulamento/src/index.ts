import { app } from "./app";
import { Transaction } from "./class/Transaction ";
import { UserAccount } from "./class/UserAccount";


new Transaction("transferindo 1", 20, "10/04/2022")
const teste1 = new Transaction("transferindo 2", 40, "10/05/2022")

const teste2 = new UserAccount("111.111.111-11", "user1", 18)

console.log(teste2.getUserInfo());
