import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import date, { Month } from '../utils/helpers/date';

export interface IDateInfoState {
  currentDate: string;
  currentMonth: Month;
  currentYear: number;
}

const initialState: IDateInfoState = {
  currentDate: date.getCurrentDate(),
  currentMonth: {
    name: date.translationMonthsByName(date.getCurrentMonthName()),
    month: date.getCurrentMonth(),
  },
  currentYear: date.getCurrentYear(),
};

export const dateInfoSlice = createSlice({
  name: 'dateInfo',
  initialState,
  reducers: {
    load: (_state, action: PayloadAction<IDateInfoState>) => ({
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
export default dateInfoSlice.reducer;

// actions
const { load } = dateInfoSlice.actions;

export const dateInfoActions = {
  load,
};
