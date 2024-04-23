import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import date, { Month } from '../utils/helpers/date';

export interface IInitialDataState {
  currentDate: string;
  currentMonth: Month;
  currentYear: number;
}

const initialState: IInitialDataState = {
  currentDate: date.getCurrentDate(),
  currentMonth: {
    name: date.translationMonthsByName(date.getCurrentMonthName()),
    month: date.getCurrentMonth(),
  },
  currentYear: date.getCurrentYear(),
};

export const initialDataSlice = createSlice({
  name: 'initialData',
  initialState,
  reducers: {
    load: (_state, action: PayloadAction<IInitialDataState>) => ({
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
