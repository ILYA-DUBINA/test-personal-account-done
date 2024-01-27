export interface NotificationService<TIn = string> {
  sendWelcomeMessage(account: TIn): string;
}

export class NotificationServiceClass<TIn> {
  sendWelcomeMessage(val: TIn){
    return `Welcome dear ${val}`;
  };
}