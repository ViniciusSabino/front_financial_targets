import {
  BALANCE_NAME_RATING,
  COMPONENT_BALANCE_POSITION,
  BALANCE_TITLE,
  TOTAL_BALANCES_LABELS,
} from './constants';

const currentBalancesAdapter = (summary) => {
  const balances = [];

  const currentBalances = Object.keys(summary.currentBalances)
    .reduce((acc, balanceName) => [...acc, ...summary.currentBalances[balanceName]]
      .map((balance, index) => ({
        name: `${balance.name} ${balance.isMain ? BALANCE_NAME_RATING[balance.type] : ''}`,
        value: `R$ ${balance.value}`,
        position: COMPONENT_BALANCE_POSITION.CURRENT,
        bordered: index > 0,
      })), []);

  balances.push({
    title: BALANCE_TITLE.CURRENT,
    position: COMPONENT_BALANCE_POSITION.CURRENT,
    balances: currentBalances,
  });

  const totalBalances = Object.keys(summary.totalBalance)
    .map((balanceName, index) => ({
      name: TOTAL_BALANCES_LABELS[balanceName.toUpperCase()],
      value: `R$ ${summary.totalBalance[balanceName]}`,
      position: 'right',
      bordered: index > 0,
    }));

  balances.push({
    title: 'Saldo Total',
    position: 'right',
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
