import { InitialDataState } from '../../features/application/initialDataSlice';

import {
  getCurrentDate,
  getCurrentMonth,
  getCurrentMonthName,
  getCurrentYear,
  translationMonthsByName,
} from '../../utils/helpers/date';

const getInitialData = (): InitialDataState => {
  const initialData: InitialDataState = {
    currentDate: getCurrentDate(),
    currentMonth: {
      name: translationMonthsByName(getCurrentMonthName()),
      month: getCurrentMonth(),
    },
    currentYear: getCurrentYear(),
  };

  return initialData;
};

export default {
  getInitialData,
};
