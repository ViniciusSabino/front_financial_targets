import { CURRENT_BALANCE, TOTAL_BALANCE, TYPES_OF_BALANCES } from '../../constants';

const mountCurrentBalanceTitle = (balance) => `${balance.name} ${balance.isMain ? CURRENT_BALANCE.TITLE_COMPLEMENT[balance.type] : ''}`;

const getBalanceGroupPosition = (type) => (type === TYPES_OF_BALANCES.CURRENT ? CURRENT_BALANCE.POSITION : TOTAL_BALANCE.POSITION);

const getBalanceMainTitle = (type) => (type === TYPES_OF_BALANCES.CURRENT ? CURRENT_BALANCE.MAIN_TITLE : TOTAL_BALANCE.MAIN_TITLE);

const getTotalBalanceTitle = (balanceName) => TOTAL_BALANCE.BALANCE_OPTIONS[balanceName.toUpperCase()];

export {
  mountCurrentBalanceTitle,
  getBalanceGroupPosition,
  getBalanceMainTitle,
  getTotalBalanceTitle,
};
