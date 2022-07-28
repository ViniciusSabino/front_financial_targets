import { Months } from '../../../utils/enums/date';
import {
  currentBalancesMapping, IBalance, ITotalBalances, totalBalancesMapping,
} from './mapper';
import api from '../../apis/accounts';

export interface CurrentBalancesApi {
  month: Months,
  year: number,
  accounts: Array<IBalance>
  investments: Array<IBalance>
}

const getCurrentBalances = async (): Promise<Array<IBalance>> => {
  const response = await api.get('/public/balances/current',
    {
      headers: { userId: '62019c68cfdad112f35788e4' },
    });

  const { data } = response;

  const currentBalances = currentBalancesMapping(data as CurrentBalancesApi);

  return currentBalances;
};

const getTotalBalances = (currentBalances: Array<IBalance>): ITotalBalances => {
  const totalBalances = totalBalancesMapping(currentBalances);

  return totalBalances;
};

export default {
  getCurrentBalances,
  getTotalBalances,
};
