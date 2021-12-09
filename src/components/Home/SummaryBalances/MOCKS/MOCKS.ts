import { CurrentBalanceTypes } from '../../../../utils/enums/balances';
import { CurrentBalancesResponse } from '../service';

const CURRENT_BALANCES_DATA: CurrentBalancesResponse = {
  accounts: [
    {
      id: 1,
      name: 'Itaú',
      type: CurrentBalanceTypes.ACCOUNT,
      value: 9400,
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
