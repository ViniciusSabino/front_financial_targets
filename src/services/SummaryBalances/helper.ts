/* eslint-disable no-param-reassign */

import { CurrentBalancesResponseKeys, CurrentBalanceTypes, TotalBalancesTypes } from '../../utils/enums/balances';
import { TotalBalance, CurrentBalancesResponse, Balance } from './service';

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

const totalBalancesMapping = (currentBalances: Array<Balance>): Array<TotalBalance> => {
  const totalBalancesEmptyState: Array<TotalBalance> = [];

  const totalBalances = currentBalances.reduce((totalBalancesAcc, balance) => {
    const totalBalanceTypes = [TotalBalancesTypes.GENERAL];

    if (balance.type === CurrentBalanceTypes.INVESTMENTS) {
      totalBalanceTypes.push(TotalBalancesTypes.INVESTMENTS);
    }

    totalBalanceTypes.forEach((type) => {
      const index = totalBalancesAcc.findIndex((total) => total.type === type);

      if (index > -1) {
        totalBalancesAcc[index].value += balance.value;
      } else {
        totalBalancesAcc.push({ type, value: balance.value });
      }
    });

    return totalBalancesAcc;
  }, totalBalancesEmptyState);

  return totalBalances;
};

export {
  currentBalancesMapping,
  totalBalancesMapping,
};
