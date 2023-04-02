import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Balance } from '../services/accounts/mapper';

export interface CurrentBalances {
  all: Array<Balance>;
}

export interface CurrentBalancesState {
  currentBalances: CurrentBalances;
}

const initialState: CurrentBalancesState = {
  currentBalances: {
    all: [],
  },
};

export const currentBalancesSlice = createSlice({
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
export default currentBalancesSlice.reducer;

// actions
const { loadAllCurrentBalances } = currentBalancesSlice.actions;

export const currentBalancesActions = {
  loadAllCurrentBalances,
};
