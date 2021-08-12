/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

import { getBalanceMainTitle } from './childrens/CurrentBalance/helpers';
import { CURRENT_BALANCE, TOTAL_BALANCE, TYPES_OF_BALANCES } from './constants';

const currentBalancesMapping = (balances) => {
  const currentBalances = Object.keys(balances)
    .reduce((acc, balanceName) => [...acc, ...balances[balanceName]]
      .map((balance, index) => ({ ...balance, index })), []);

  const totalBalances = currentBalances.reduce((totalBalancesAcc, balance) => {
    const totalBalanceOptions = [TOTAL_BALANCE.TYPES.GENERAL];

    if (balance.type === CURRENT_BALANCE.TYPES.INVESTMENTS) {
      totalBalanceOptions.push(TOTAL_BALANCE.TYPES.INVESTMENTS);
    }

    totalBalanceOptions.forEach((option, index) => {
      const indexAcc = totalBalancesAcc.findIndex((total) => total.name === option);

      if (indexAcc < 0) {
        totalBalancesAcc.push(
          {
            id: index,
            index,
            name: option,
            value: balance.value,
          },
        );
      } else {
        totalBalancesAcc[indexAcc].value += balance.value;
      }
    });

    return totalBalancesAcc;
  }, []);

  return {
    currentBalances: {
      title: getBalanceMainTitle(TYPES_OF_BALANCES.CURRENT),
      type: TYPES_OF_BALANCES.CURRENT,
      balances: currentBalances,
    },
    totalBalances: {
      title: getBalanceMainTitle(TYPES_OF_BALANCES.TOTAL),
      type: TYPES_OF_BALANCES.TOTAL,
      balances: totalBalances,
    },
  };
};

export {
  currentBalancesMapping,
};
