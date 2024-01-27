export class Account {
  public id: string;
  public email: string;
  public name: string;
  public number: string;
  public status: AccountStatus;

  constructor(obj: {id: string, email: string, name: string, number: string, status: AccountStatus}){
    this.id = obj.id;
    this.email = obj.email;
    this.name = obj.name;
    this.number = obj.number;
    this.status = obj.status;
  }

  set #id(newId: string){
    this.id = newId;
  }
  get #id(){
    return this.id;
  }
  set #name(newId: string){
    this.name = newId;
  }
  get #name(){
    return this.name;
  }
  set #number(newId: string){
    this.number = newId;
  }
  get #number(){
    return this.number;
  }
  set #status(newId: AccountStatus){
    this.status = newId;
  }
  get #status(){
    return this.status;
  }
  set #email(newId: string){
    this.email = newId;
  }
  get #email(){
    return this.email;
  }
}

export type AccountStatus = "Open" | "Close";
