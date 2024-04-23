import { TotalBalancesTypes } from '../../enums/accounts/balance.enum';
import { AccountType } from '../../enums/accounts/accounts.enum';
import {
  Balance, CurrentBalances, CurrentBalancesAPIResponse, TotalBalances,
} from '../../types/accounts/balance.type';

const currentBalancesMapping = (data: CurrentBalancesAPIResponse): CurrentBalances => {
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
