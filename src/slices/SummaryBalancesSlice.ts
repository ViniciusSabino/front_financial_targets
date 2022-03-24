import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBalance } from '../services/SummaryBalances/mapper';

export interface CurrentBalances {
  all: Array<IBalance>
}

export interface SummaryBalancesState {
  currentBalances: CurrentBalances;
}

const initialState: SummaryBalancesState = {
  currentBalances: {
    all: [],
  },
};

export const summaryBalancesSlice = createSlice({
  name: 'summaryBalances',
  initialState,
  reducers: {
    loadAllCurrentBalances: (state, action: PayloadAction<Array<IBalance>>) => ({
      ...state,
      currentBalances: {
        ...state.currentBalances,
        all: action.payload,
      },
    }),
  },
});

// reducer
export default summaryBalancesSlice.reducer;

// actions
const { loadAllCurrentBalances } = summaryBalancesSlice.actions;

export const summaryBalancesActions = {
  loadAllCurrentBalances,
};
