import { CURRENT_BALANCE } from './constants';

const SUMMARY_BALANCES_DATA = {
  currentBalances: {
    accounts: [
      {
        id: 1,
        name: 'Itaú 01',
        type: CURRENT_BALANCE.TYPES.ACCOUNT,
        value: 3400,
        isMain: true,
      },
    ],
    investments: [
      {
        id: 2,
        name: 'Investimento 1',
        type: CURRENT_BALANCE.TYPES.INVESTMENT,
        value: 10400,
        isMain: true,
      },
    ],
  },
  totalBalances: [
    {
      id: 1,
      name: 'investments',
      value: 129384,
    },
    {
      id: 2,
      name: 'general',
      value: 40989.29,
    },

  ],
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
