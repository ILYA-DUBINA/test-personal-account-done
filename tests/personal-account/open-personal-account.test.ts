import {
  Account,
  AccountError,
  AccountManager,
  OpenAccountCommand,
  NotificationService,
  NotificationServiceClass
} from "../../source/personal-account";


describe('Personal-Account: OpenAccount', () => {
  let notificationService: NotificationService;
  let manager: AccountManager;
  manager = new AccountManager();
  notificationService = new NotificationServiceClass(); 
  jest.spyOn(notificationService, 'sendWelcomeMessage');
  notificationService.sendWelcomeMessage('hello');

  test('Should successfully open a personal account', async() => {
    const command = new OpenAccountCommand();
   
    command.email = "customer1@domain.ru";
    command.name = "Ярославцев Николай Сереевич";

    const account = await manager.openAccount(command);

    expect(account).toBeInstanceOf(Account);
    expect(account).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        email: "customer1@domain.ru",
        name: "Ярославцев Николай Сереевич",
        number: expect.any(String),
        status: "Open"
      })
    );

    expect(notificationService.sendWelcomeMessage).toBeCalledTimes(1);
  });

  test('Should throw an error for empty name', async () => {
    try {
      const command = new OpenAccountCommand();
      command.email = "customer1@domain.ru";

      const account = await manager.openAccount(command);
    } catch (e) {
      expect(e).toBeInstanceOf(AccountError);
    }
  });

  test('Should throw an error for empty email address', async () => {
    try {
      const command = new OpenAccountCommand();
      command.name = "Костюшин Дмитрий Анатольевич";

      const account = await manager.openAccount(command);
    } catch (e) {
      expect(e).toBeInstanceOf(AccountError);
    }
  });

  test('Should throw an error for incorrect email address', async () => {
    try {
      const command = new OpenAccountCommand();
      command.name = "Костюшин Дмитрий Анатольевич";
      command.email = "domain.ru";

      const account = await manager.openAccount(command);
    } catch (e) {
      expect(e).toBeInstanceOf(AccountError);
    }
  });
});
