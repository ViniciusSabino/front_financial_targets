import { CURRENT_BALANCE, TYPES_OF_CLOSINGS } from '../constants';

const SUMMARY_BALANCES_DATA = {
  accounts: [
    {
      id: 1,
      name: 'Itaú',
      type: CURRENT_BALANCE.TYPES.ACCOUNT,
      value: 9400,
      isMain: true,
    },
  ],
  investments: [
    {
      id: 2,
      name: 'Itaú Poupança',
      type: CURRENT_BALANCE.TYPES.INVESTMENTS,
      value: 25739,
      isMain: true,
    },
  ],
};

const SUMMARIZED_CLOSINGS_DATA = {
  month: 7,
  closings: [
    {
      type: TYPES_OF_CLOSINGS.ESTIMATED.name,
      value: 109400,
    },
    {
      type: TYPES_OF_CLOSINGS.CURRENT.name,
      value: 900,
    },
  ],
};

const getCurrentBalances = () => Promise.resolve(SUMMARY_BALANCES_DATA);

const getSummarizedClosings = () => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export default {
  getCurrentBalances,
  getSummarizedClosings,
};
