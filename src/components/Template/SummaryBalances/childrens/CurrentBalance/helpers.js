import { CURRENT_BALANCE, TOTAL_BALANCE, TYPES_OF_BALANCES } from '../../constants';

const mountBalanceTitle = (balance, type) => {
  if (type === TYPES_OF_BALANCES.CURRENT) {
    return `${balance.name} ${balance.isMain ? CURRENT_BALANCE.TITLE_COMPLEMENT[balance.type] : ''}`;
  }

  if (type === TYPES_OF_BALANCES.TOTAL) {
    return TOTAL_BALANCE.BALANCE_OPTIONS[balance.name.toUpperCase()];
  }

  return '';
};

const getBalanceGroupPosition = (type) => (type === TYPES_OF_BALANCES.CURRENT ? CURRENT_BALANCE.POSITION : TOTAL_BALANCE.POSITION);

const getBalanceMainTitle = (type) => (type === TYPES_OF_BALANCES.CURRENT ? CURRENT_BALANCE.MAIN_TITLE : TOTAL_BALANCE.MAIN_TITLE);

const shouldPutBorderBalance = (index) => index > 0;

export {
  mountBalanceTitle,
  getBalanceGroupPosition,
  getBalanceMainTitle,
  shouldPutBorderBalance,
};
