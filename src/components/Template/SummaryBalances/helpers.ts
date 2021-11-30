/* eslint-disable import/prefer-default-export */

import { CurrentBalancesResponseTypes, CurrentBalanceTypes, TotalBalancesTypes } from '../../../utils/enums/balances';
import { CurrentBalancesResponse, Balance } from './MOCKS/MOCKS';
import { TotalBalances } from './service';

const currentBalancesMapping = (data: CurrentBalancesResponse): Array<Balance> => {
  const infoTypes = [
    CurrentBalancesResponseTypes.accounts,
    CurrentBalancesResponseTypes.investments,
  ];

  const initialState: Array<Balance> = [];

  const currentBalances = infoTypes.reduce((allBalances, type) => [...allBalances, ...data[type]]
    .map((balance) => balance), initialState);

  return currentBalances;
};

const totalBalancesMapping = (currentBalances: Array<Balance>): Array<TotalBalances> => {
  const totalBalancesEmptyState: Array<TotalBalances> = [];

  const totalBalances = currentBalances.reduce((totalBalancesAcc, balance) => {
    const totalBalanceTypes = [TotalBalancesTypes.GENERAL];

    if (balance.type === CurrentBalanceTypes.INVESTMENTS) {
      totalBalanceTypes.push(TotalBalancesTypes.INVESTMENTS);
    }

    totalBalanceTypes.forEach((type) => {
      const index = totalBalancesAcc.findIndex((total) => total.type === type);

      if (index < 0) {
        totalBalancesAcc.push({ type, value: balance.value });
      } else {
        totalBalancesAcc[index].value += balance.value;
      }
    });

    return totalBalancesAcc;
  }, totalBalancesEmptyState);

  return totalBalances;
};

//  totalBalances: {
//   title: getBalanceMainTitle(TYPES_OF_BALANCES.TOTAL),
//   type: TYPES_OF_BALANCES.TOTAL,
//   balances: totalBalances,
// },

// const totalBalances = currentBalances.reduce((totalBalancesAcc, balance) => {
//   const totalBalanceOptions = [TOTAL_BALANCE.TYPES.GENERAL];

//   if (balance.type === CURRENT_BALANCE.TYPES.INVESTMENTS) {
//     totalBalanceOptions.push(TOTAL_BALANCE.TYPES.INVESTMENTS);
//   }

//   totalBalanceOptions.forEach((option, index) => {
//     const indexAcc = totalBalancesAcc.findIndex((total) => total.name === option);

//     if (indexAcc < 0) {
//       totalBalancesAcc.push(
//         {
//           id: index,
//           index,
//           name: option,
//           value: balance.value,
//         },
//       );
//     } else {
//       totalBalancesAcc[indexAcc].value += balance.value;
//     }
//   });

//   return totalBalancesAcc;
// }, []);

export {
  currentBalancesMapping,
};
