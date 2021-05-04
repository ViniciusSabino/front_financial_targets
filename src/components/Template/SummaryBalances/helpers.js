import {
  mountCurrentBalanceTitle,
  getTotalBalanceTitle,
  getBalanceGroupPosition,
  getBalanceMainTitle,
} from './childrens/CurrentBalance/helpers';

import { TYPES_OF_BALANCES } from './constants';

const currentBalancesAdapter = (summary) => {
  const balances = [];

  const currentBalances = Object.keys(summary.currentBalances)
    .reduce((acc, balanceName) => [...acc, ...summary.currentBalances[balanceName]]
      .map((balance, index) => ({
        name: mountCurrentBalanceTitle(balance),
        value: `R$ ${balance.value}`,
        position: getBalanceGroupPosition(TYPES_OF_BALANCES.CURRENT),
        bordered: index > 0,
      })), []);

  balances.push({
    title: getBalanceMainTitle(TYPES_OF_BALANCES.CURRENT),
    position: getBalanceGroupPosition(TYPES_OF_BALANCES.CURRENT),
    balances: currentBalances,
  });

  const totalBalances = Object.keys(summary.totalBalance)
    .map((balanceName, index) => ({
      name: getTotalBalanceTitle(balanceName),
      value: `R$ ${summary.totalBalance[balanceName]}`,
      position: getBalanceGroupPosition(TYPES_OF_BALANCES.TOTAL),
      bordered: index > 0,
    }));

  balances.push({
    title: getBalanceMainTitle(TYPES_OF_BALANCES.TOTAL),
    position: getBalanceGroupPosition(TYPES_OF_BALANCES.TOTAL),
    balances: totalBalances,
  });

  return balances;
};

const summarizedClosingsAdapter = (closings) => closings.map((closing) => (
  { ...closing, value: `R$ ${closing.value}` }));

export {
  currentBalancesAdapter,
  summarizedClosingsAdapter,
};
