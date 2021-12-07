import { TotalBalancesTypes, CurrentBalanceTypes, TypesOfClosings } from '../../../utils/enums/balances';
import { currentBalancesMapping, totalBalancesMapping } from './helpers';
import MOCKS from './MOCKS/MOCKS';

export interface Balance {
  id: number
  name: string
  type: CurrentBalanceTypes
  value: number
  isMain: boolean
}
export interface CurrentBalancesResponse {
  accounts: Array<Balance>
  investments: Array<Balance>
}
export interface TotalBalance {
  type: TotalBalancesTypes
  value: number
}

export interface SummarizedClosingsResponse {
 type: TypesOfClosings,
}

const getCurrentBalances = async (): Promise<Array<Balance>> => {
  const data = await MOCKS.getCurrentBalances();

  const currentBalances = currentBalancesMapping(data);

  return currentBalances;
};

const getTotalBalances = (currentBalances: Array<Balance>): Array<TotalBalance> => {
  const totalBalances = totalBalancesMapping(currentBalances);

  return totalBalances;
};

const getSummarizedClosings = async (): Promise<Array<SummarizedClosingsResponse>> => {
  const data = await MOCKS.getSummarizedClosings();

  return data;
};

export default {
  getCurrentBalances,
  getTotalBalances,
  getSummarizedClosings,
};
