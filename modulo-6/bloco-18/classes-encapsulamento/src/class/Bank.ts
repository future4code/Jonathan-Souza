import { UserAccount } from "./UserAccount";

export class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    
    public getAccounts = () => this.accounts
  }