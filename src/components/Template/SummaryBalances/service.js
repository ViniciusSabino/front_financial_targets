import { currentBalancesAdapter, summarizedClosingsAdapter } from './helpers';
import MOCKS from './MOCKS';

const getCurrentBalances = async () => {
  const data = await MOCKS.getCurrentBalances();

  return currentBalancesAdapter(data);
};

const getSummarizedClosings = async () => {
  const data = await MOCKS.getSummarizedClosings();

  return summarizedClosingsAdapter(data);
};

export default {
  getCurrentBalances,
  getSummarizedClosings,
};
