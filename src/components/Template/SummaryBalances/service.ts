import { TotalBalancesTypes } from '../../../utils/enums/balances';
import { currentBalancesMapping, totalBalancesMapping } from './helpers';
import MOCKS, { Balance } from './MOCKS/MOCKS';

interface TotalBalances {
  type: TotalBalancesTypes
  value: number
}

const getCurrentBalances = async (): Promise<Array<Balance>> => {
  const data = await MOCKS.getCurrentBalances();

  const currentBalances = currentBalancesMapping(data);

  return currentBalances;
};

const getTotalBalances = async (currentBalances: Array<Balance>): Array<TotalBalances> => {
  const totalBalances = totalBalancesMapping(currentBalances);

  return totalBalances;
};

// const getSummarizedClosings = async () => {
//   const data = await MOCKS.getSummarizedClosings();

//   return data;
// };

export { TotalBalances };

export default {
  getCurrentBalances,
  getTotalBalances,
  // getSummarizedClosings,
};
