import { AccountType, CurrentBalanceTypes, TotalBalancesTypes } from '../../utils/enums/accounts.enum';
import { Months } from '../../utils/enums/date.enum';
import { CurrentBalancesResponse } from './service';

interface Account {
  id: string;
  name: string;
  type: AccountType;
  user: string;
  main: boolean;
}

export interface TotalBalanceValue {
  type: TotalBalancesTypes;
  value: number;
}
export interface TotalBalances {
  general: TotalBalanceValue;
  investments: TotalBalanceValue;
}

export interface Balance {
  id: string;
  account: Account;
  month: Months;
  year: number;
  value: number;
}

export interface CurrentBalances {
  accounts: Balance[];
  investments: Balance[];
}

const currentBalancesMapping = (data: CurrentBalancesResponse): CurrentBalances => {
  const { accounts, investments } = data;

  return { accounts, investments };
};

const totalBalancesMapping = (accounts: Array<Balance>, investments: Array<Balance>): TotalBalances => {
  const allBalances = [...accounts, ...investments];

  const initialState: TotalBalances = {
    general: {
      type: TotalBalancesTypes.GENERAL,
      value: 0.0,
    },
    investments: {
      type: TotalBalancesTypes.INVESTMENTS,
      value: 0.0,
    },
  };

  return allBalances.reduce(
    (totalBalances, balance) => ({
      general: {
        ...totalBalances.general,
        value: totalBalances.general.value + balance.value,
      },
      investments: {
        ...totalBalances.investments,
        value: totalBalances.investments.value + (balance.account.type === AccountType.INVESTMENT ? balance.value : 0),
      },
    }),
    initialState,
  );
};

export { currentBalancesMapping, totalBalancesMapping };
