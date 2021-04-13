import { CURRENT_BALANCE_TYPES } from './constants';

const SUMMARY_BALANCES_DATA = {
  currentBalances: {
    accounts: [
      {
        name: 'Itaú 01',
        type: CURRENT_BALANCE_TYPES.ACCOUNT,
        value: 3400.00,
        isMain: true,
      },
    ],
    investments: [
      {
        name: 'Investimento 1',
        type: CURRENT_BALANCE_TYPES.INVESTMENT,
        value: 10400.00,
        isMain: true,
      },
    ],
  },
  totalBalance: {
    investments: 129384,
    general: 40989.29,
  },
};

const SUMMARIZED_CLOSINGS_DATA = [
  {
    description: 'Fechamento estimado para o mês de Março',
    value: 10400,
  },

  {
    description: 'Fechamento atual para o mês de Março',
    value: 900,
  },
];

const getCurrentBalances = () => Promise.resolve(SUMMARY_BALANCES_DATA);

const getSummarizedClosings = () => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export default {
  getCurrentBalances,
  getSummarizedClosings,
};
