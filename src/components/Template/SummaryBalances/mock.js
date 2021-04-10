const getSummaryBalances = () => Promise.resolve({
  currentBalances: {
    accounts: [
      {
        name: 'Itaú 01',
        type: 'ACCOUNT',
        value: 3400.00,
        isMain: true,
      },
    ],
    investments: [
      {
        name: 'Investimento 1',
        type: 'INVESTIMENT',
        value: 10400.00,
        isMain: true,
      },
    ],
  },
  totalBalance: {
    investments: 129384,
    general: 40989.29,
  },
});

export default {
  getSummaryBalances,
};
