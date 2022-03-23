import { Months } from '../../utils/enums/date';
import { currentBalancesMapping, ITotalBalances, totalBalancesMapping } from './helper';
import accountsApi from '../apis/accounts';
import { Balance } from '../../slices/SummaryBalancesSlice';

export interface CurrentBalancesResponse {
  month: Months,
  year: number,
  accounts: Array<Balance>
  investments: Array<Balance>
}

const getCurrentBalances = async (): Promise<Array<Balance>> => {
  const response = await accountsApi.get('/public/balances/current',
    {
      headers: { userId: '62019c68cfdad112f35788e4' },
    });

  const { data } = response;

  const currentBalances = currentBalancesMapping(data as CurrentBalancesResponse);

  return currentBalances;
};

const getTotalBalances = (currentBalances: Array<Balance>): ITotalBalances => {
  const totalBalances = totalBalancesMapping(currentBalances);

  return totalBalances;
};

export default {
  getCurrentBalances,
  getTotalBalances,
};
