export class AccountError extends Error {
   static STATUS_CODE = 500; 
    name = 'AccountError';

    constructor() {
      super('Account Error, there is no such user');
    }
}
