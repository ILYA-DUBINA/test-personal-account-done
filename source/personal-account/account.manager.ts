import {OpenAccountCommand} from "./open-account.command";
import {CloseAccountCommand} from "./close-account.command";
import {GetAccountsQuery} from "./get-accounts.query";
import {Account} from "./account";

export interface AccountManager {
  openAccount(command: OpenAccountCommand): Promise<Account>
  closeAccount(command: CloseAccountCommand): Promise<Account>
  getAccounts(query: GetAccountsQuery): Promise<Account[]>
}

export class AccountManager {
  async closeAccount(val: {id: string}){
    let obj = new Account({id: val.id, name: 'Пугачева Ольга Сергеевна', email: 'customer0919@domain.ru', number: val.id, status: 'Close'});
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => resolve(obj), 10);
    });
    return data;
  }
  async openAccount(val: {email: string, name: string}){
    let obj = new Account({id: '1111', name: val.name, email: val.email, number: '11111', status: 'Open'});    
    const data = await new Promise((resolve, reject) => {
      resolve(obj);
    });
    return data;
  }
}