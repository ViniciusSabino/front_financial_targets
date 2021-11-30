import { CurrentBalanceTypes } from '../../../../utils/enums/balances';

interface Balance {
  id: number
  name: string
  type: CurrentBalanceTypes
  value: number
  isMain: boolean
}

interface CurrentBalancesResponse {
  accounts: Array<Balance>
  investments: Array<Balance>
}

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

// const SUMMARIZED_CLOSINGS_DATA = {
//   month: 7,
//   closings: [
//     {
//       type: TYPES_OF_CLOSINGS.ESTIMATED.name,
//       value: 109400,
//     },
//     {
//       type: TYPES_OF_CLOSINGS.CURRENT.name,
//       value: 900,
//     },
//   ],
// };

const getCurrentBalances = (): Promise<CurrentBalancesResponse> => Promise.resolve(CURRENT_BALANCES_DATA);

// const getSummarizedClosings = () => Promise.resolve(SUMMARIZED_CLOSINGS_DATA);

export { Balance, CurrentBalancesResponse };

export default {
  getCurrentBalances,
  // getSummarizedClosings,
};
