import { CurrentBalancesResponseKeys, CurrentBalanceTypes, TotalBalancesTypes } from '../../utils/enums/accounts.enum';
import { CurrentBalancesApi } from './service';

interface TotalBalance {
  type: TotalBalancesTypes;
  value: number;
}
export interface TotalBalances {
  general: TotalBalance;
  investments: TotalBalance;
}

export interface Balance {
  id: number;
  name: string;
  type: CurrentBalanceTypes;
  value: number;
  isMain: boolean;
}

const currentBalancesMapping = (data: CurrentBalancesApi): Array<Balance> => {
  const infoTypes = [CurrentBalancesResponseKeys.accounts, CurrentBalancesResponseKeys.investments];

  const initialState: Array<Balance> = [];

  const currentBalances = infoTypes.reduce(
    (allBalances, type) => [...allBalances, ...data[type]].map((balance) => balance),
    initialState,
  );

  return currentBalances;
};

const totalBalancesMapping = (currentBalances: Array<Balance>): TotalBalances => {
  const totalEmptyState = {
    general: {
      type: TotalBalancesTypes.GENERAL,
      value: 0,
    },
    investments: {
      type: TotalBalancesTypes.INVESTMENTS,
      value: 0,
    },
  };

  const totalBalances = currentBalances.reduce((total, balance) => {
    if (balance.type === CurrentBalanceTypes.ACCOUNT) {
      return {
        ...total,
        general: {
          ...total.general,
          value: total.general.value + balance.value,
        },
      };
    }

    return {
      general: {
        ...total.general,
        value: total.general.value + balance.value,
      },
      investments: {
        ...total.investments,
        value: total.investments.value + balance.value,
      },
    };
  }, totalEmptyState);

  return totalBalances;
};

export { currentBalancesMapping, totalBalancesMapping };
