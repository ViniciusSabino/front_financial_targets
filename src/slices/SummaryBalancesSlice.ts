import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentBalanceTypes } from '../utils/enums/balances';

export interface Balance {
  id: number
  name: string
  type: CurrentBalanceTypes
  value: number
  isMain: boolean
}

export interface CurrentBalances {
  all: Array<Balance>
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
    loadAllCurrentBalances: (state, action: PayloadAction<Array<Balance>>) => ({
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
