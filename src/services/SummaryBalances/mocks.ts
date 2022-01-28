import { CurrentBalanceTypes } from '../../utils/enums/balances';
import { Months } from '../../utils/enums/date';
import { CurrentBalancesResponse } from './service';

const CURRENT_BALANCES_DATA: CurrentBalancesResponse = {
  month: Months.JANUARY,
  year: 2022,
  accounts: [
    {
      id: 1,
      name: 'Itaú',
      type: CurrentBalanceTypes.ACCOUNT,
      value: 9488,
      isMain: true,
    },
  ],
  investments: [
    {
      id: 2,
      name: 'Itaú Poupança',
      type: CurrentBalanceTypes.INVESTMENTS,
      value: 25739,
      isMain: true,
    },
  ],
};

const getCurrentBalances = (): Promise<CurrentBalancesResponse> => Promise.resolve(CURRENT_BALANCES_DATA);

export default {
  getCurrentBalances,
};
