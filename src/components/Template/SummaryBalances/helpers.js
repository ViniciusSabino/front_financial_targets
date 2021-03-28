const prepareBalanceData = (summary) => {
  const TOTAL_BALANCES_LABELS = {
    general: 'Geral',
    investments: 'Investimentos',
  };

  const CURRENT_BALANCES_LABELS = {
    ACCOUNT: '- Conta Principal',
    INVESTIMENT: '- Principal',
  };
  E;
  const balances = [];

  const totalBalances = Object.keys(summary.totalBalance);

  balances.push(
    ...totalBalances
      .map((balanceName, index) => ({
        name: TOTAL_BALANCES_LABELS[balanceName],
        value: `R$ ${summary.totalBalance[balanceName]}`,
        position: 'right',
        bordered: index > 0,
      })),
  );

  const currentBalances = Object.keys(summary.currentBalances)
    .reduce((acc, balanceName) => [
      ...acc,
      ...summary.currentBalances[balanceName],
    ], []);

  balances.push(...currentBalances
    .map((balance, index) => ({
      name: `${balance.name} ${balance.isMain ? CURRENT_BALANCES_LABELS[balance.type] : ''}`,
      value: `R$ ${balance.value}`,
      position: 'left',
      bordered: index > 0,
    })));

  return balances;
};

export default {
  prepareBalanceData,
};
