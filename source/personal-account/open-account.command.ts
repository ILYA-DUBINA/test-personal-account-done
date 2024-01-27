export class OpenAccountCommand {    
    public email: string;
    public name: string;

    constructor(email: string = '', name: string = ''){
      this.email = email;
      this.name = name;
    }

    set #email(valE: string){
      this.email = valE;
    }
    get #email(){
      return this.email;
    }
    set #name(valN: string){
      this.name = valN;
    }
    get #name(){
      return this.name;
    }
}
