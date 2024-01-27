export class CloseAccountCommand { 
    public id: string;   
    constructor(id: string = '') {
      this.id = id;
    }
    set(val: string){
      this.id = val;
    }
    get(){
      return this.id;
    }
}
