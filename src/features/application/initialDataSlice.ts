import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../store';
import { MonthNumberByName, MonthsTranslated } from '../../utils/enums/date';

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
  currentDate: '',
  currentMonth: {
    name: MonthsTranslated.APRIL,
    month: MonthNumberByName.APRIL,
  },
  currentYear: 2019,
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

export const getInitialData = (state: RootState): InitialDataState => state.initialData;

// reducer
export default initialDataSlice.reducer;

// actions
const { load } = initialDataSlice.actions;

export const initialDataActions = {
  load,
};
