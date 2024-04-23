import { AccountType } from '../../enums/accounts/accounts.enum';

interface Account {
  id: string;
  name: string;
  type: AccountType;
  user: string;
  main: boolean;
}

export { Account };
