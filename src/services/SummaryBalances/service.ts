import { TotalBalancesTypes, CurrentBalanceTypes } from '../../utils/enums/balances';
import { currentBalancesMapping, totalBalancesMapping } from './helper';
import MOCKS from './mocks';

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

const getCurrentBalances = async (): Promise<Array<Balance>> => {
  const data = await MOCKS.getCurrentBalances();

  const currentBalances = currentBalancesMapping(data);

  return currentBalances;
};

const getTotalBalances = (currentBalances: Array<Balance>): Array<TotalBalance> => {
  const totalBalances = totalBalancesMapping(currentBalances);

  return totalBalances;
};

export default {
  getCurrentBalances,
  getTotalBalances,
};
