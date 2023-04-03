import { Months } from '../../utils/enums/date.enum';
import {
  currentBalancesMapping, Balance, TotalBalances, totalBalancesMapping,
} from './mapper';
import api from '../apis/accounts';

export interface CurrentBalancesApi {
  month: Months;
  year: number;
  accounts: Array<Balance>;
  investments: Array<Balance>;
}

const getCurrentBalances = async (): Promise<Array<Balance>> => {
  try {
    const response = await api.get('/private/balances/current', {
      headers: { userId: '62019c68cfdad112f35788e4' },
    });

    const { data } = response;

    const currentBalances = currentBalancesMapping(data as CurrentBalancesApi);

    return currentBalances;
  } catch (error) {
    // TODO: Implementar tratamento de erro que possa ser reutilizado por toda a aplicação
    return [];
  }
};

const getTotalBalances = (currentBalances: Array<Balance>): TotalBalances => {
  const totalBalances = totalBalancesMapping(currentBalances);

  return totalBalances;
};

export default {
  getCurrentBalances,
  getTotalBalances,
};
