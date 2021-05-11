import { currentBalanceMapping, totalBalancesMapping, summarizedClosingsAdapter } from './helpers';
import MOCKS from './MOCKS';

const getCurrentBalances = async () => {
  const data = await MOCKS.getCurrentBalances();

  return {
    currentBalances: currentBalanceMapping(data.currentBalances),
    totalBalances: totalBalancesMapping(data.totalBalances),
  };
};

const getSummarizedClosings = async () => {
  const data = await MOCKS.getSummarizedClosings();

  return summarizedClosingsAdapter(data);
};

export default {
  getCurrentBalances,
  getSummarizedClosings,
};
