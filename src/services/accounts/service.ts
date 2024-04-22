import { Months } from '../../utils/enums/date.enum';
import {
  currentBalancesMapping, Balance, TotalBalances, totalBalancesMapping, CurrentBalances,
} from './mapper';
import api from '../apis/accounts';

export interface CurrentBalancesResponse {
  month: Months;
  year: number;
  accounts: Array<Balance>;
  investments: Array<Balance>;
}

const getCurrentBalances = async (): Promise<CurrentBalances> => {
  try {
    const response = await api.get('/balance/current');

    const { data } = response;

    const currentBalances = currentBalancesMapping(data as CurrentBalancesResponse);

    return currentBalances;
  } catch (error) {
    return {
      accounts: [],
      investments: [],
    };
  }
};

const getTotalBalances = (accounts: Array<Balance>, investments: Array<Balance>): TotalBalances => {
  const totalBalances = totalBalancesMapping(accounts, investments);

  return totalBalances;
};

export default {
  getCurrentBalances,
  getTotalBalances,
};
