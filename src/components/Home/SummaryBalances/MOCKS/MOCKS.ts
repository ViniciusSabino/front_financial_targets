import { CurrentBalanceTypes, TypesOfClosings } from '../../../../utils/enums/balances';
import { CurrentBalancesResponse, SummarizedClosingsResponse } from '../service';

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

const SUMMARIZED_CLOSINGS_DATA = [
  {
    type: TypesOfClosings.ESTIMATED,
    value: 109400,
  },
  {
    type: TypesOfClosings.CURRENT,
    value: 900,
  },
];

const getCurrentBalances = (): Promise<CurrentBalancesResponse> => Promise.resolve(CURRENT_BALANCES_DATA);

const getSummarizedClosings = (): Promise<Array<SummarizedClosingsResponse>> => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export default {
  getCurrentBalances,
  getSummarizedClosings,
};
