import { getBalanceMainTitle } from './childrens/CurrentBalance/helpers';
import { TYPES_OF_BALANCES } from './constants';

const currentBalanceMapping = (balances) => {
  const currentBalances = Object.keys(balances)
    .reduce((acc, balanceName) => [...acc, ...balances[balanceName]]
      .map((balance, index) => ({ ...balance, index })), []);

  return {
    title: getBalanceMainTitle(TYPES_OF_BALANCES.CURRENT),
    type: TYPES_OF_BALANCES.CURRENT,
    balances: currentBalances,
  };
};

const totalBalancesMapping = (totalBalances) => ({
  title: getBalanceMainTitle(TYPES_OF_BALANCES.TOTAL),
  type: TYPES_OF_BALANCES.TOTAL,
  balances: totalBalances
    .map((totalBalance, index) => ({ ...totalBalance, index })),
});

export {
  currentBalanceMapping,
  totalBalancesMapping,
};
