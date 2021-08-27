import { currentBalancesMapping } from './helpers';
import MOCKS from './MOCKS/MOCKS';

const getCurrentBalances = async () => {
  const data = await MOCKS.getCurrentBalances();

  const { currentBalances, totalBalances } = currentBalancesMapping(data);

  return { currentBalances, totalBalances };
};

const getSummarizedClosings = async () => {
  const data = await MOCKS.getSummarizedClosings();

  return data;
};

export default {
  getCurrentBalances,
  getSummarizedClosings,
};
