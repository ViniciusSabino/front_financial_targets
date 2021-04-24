/* eslint-disable import/prefer-default-export */
import { getCurrentMonth } from '../../utils/dates';
import { MONTH_NAME_BY_NUMBER } from '../../utils/enums/dates';

const getCurrentMonthName = () => {
  const monthNumber = getCurrentMonth();

  return MONTH_NAME_BY_NUMBER[monthNumber];
};

export {
  getCurrentMonthName,
};
