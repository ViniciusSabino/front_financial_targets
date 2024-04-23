import {
  Balance, CurrentBalances, CurrentBalancesAPIResponse, TotalBalances,
} from '../../types/accounts/balance.type';

import { currentBalancesMapping, totalBalancesMapping } from './mapper';
import api from '../apis/accounts';

const getCurrentBalances = async (): Promise<CurrentBalances> => {
  try {
    const response = await api.get('/balance/current');

    const { data } = response;

    const currentBalances = currentBalancesMapping(data as CurrentBalancesAPIResponse);

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
