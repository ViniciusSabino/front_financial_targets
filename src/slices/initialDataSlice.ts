import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MonthNumberByName, MonthsTranslated } from '../utils/enums/date';
import {
  getCurrentDate,
  getCurrentMonth,
  getCurrentMonthName,
  getCurrentYear,
  translationMonthsByName,
} from '../utils/helpers/date';

interface Month {
  name: MonthsTranslated,
  month: MonthNumberByName,
}

export interface InitialDataState {
  currentDate: string,
  currentMonth: Month,
  currentYear: number
}

const initialState: InitialDataState = {
  currentDate: getCurrentDate(),
  currentMonth: {
    name: translationMonthsByName(getCurrentMonthName()),
    month: getCurrentMonth(),
  },
  currentYear: getCurrentYear(),
};

export const initialDataSlice = createSlice({
  name: 'initialData',
  initialState,
  reducers: {
    load: (_state, action: PayloadAction<InitialDataState>) => ({
      currentDate: action.payload.currentDate,
      currentMonth: {
        name: action.payload.currentMonth.name,
        month: action.payload.currentMonth.month,
      },
      currentYear: action.payload.currentYear,
    }),
  },
});

// reducer
export default initialDataSlice.reducer;

// actions
const { load } = initialDataSlice.actions;

export const initialDataActions = {
  load,
};
