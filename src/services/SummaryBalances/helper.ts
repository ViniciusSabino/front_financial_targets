import { Balance } from '../../slices/SummaryBalancesSlice';
import { CurrentBalancesResponseKeys, CurrentBalanceTypes, TotalBalancesTypes } from '../../utils/enums/balances';
import { CurrentBalancesResponse } from './service';

interface ITotalBalance {
  type: TotalBalancesTypes;
  value: number
}
export interface ITotalBalances {
  general: ITotalBalance
  investments: ITotalBalance
}

const currentBalancesMapping = (data: CurrentBalancesResponse): Array<Balance> => {
  const infoTypes = [
    CurrentBalancesResponseKeys.accounts,
    CurrentBalancesResponseKeys.investments,
  ];

  const initialState: Array<Balance> = [];

  const currentBalances = infoTypes.reduce((allBalances, type) => [...allBalances, ...data[type]]
    .map((balance) => balance), initialState);

  return currentBalances;
};

const totalBalancesMapping = (currentBalances: Array<Balance>): ITotalBalances => {
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

export {
  currentBalancesMapping,
  totalBalancesMapping,
};
