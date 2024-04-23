import { TotalBalancesTypes } from '../../enums/accounts/balance.enum';
import { Months } from '../../enums/date.enum';
import { Account } from './account.type';

interface TotalBalanceValue {
  type: TotalBalancesTypes;
  value: number;
}
interface TotalBalances {
  general: TotalBalanceValue;
  investments: TotalBalanceValue;
}

interface Balance {
  id: string;
  account: Account;
  month: Months;
  year: number;
  value: number;
}

interface CurrentBalances {
  accounts: Array<Balance>;
  investments: Array<Balance>;
}

interface CurrentBalancesAPIResponse {
  month: Months;
  year: number;
  accounts: Array<Balance>;
  investments: Array<Balance>;
}

export {
  TotalBalanceValue, TotalBalances, Balance, CurrentBalances, CurrentBalancesAPIResponse,
};
