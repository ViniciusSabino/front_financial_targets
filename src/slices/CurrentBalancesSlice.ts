import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Balance } from '../types/accounts/balance.type';

interface CurrentBalances {
  accounts: Array<Balance>;
  investments: Array<Balance>;
}
export interface CurrentBalancesState {
  current: CurrentBalances;
}

const initialState: CurrentBalancesState = {
  current: {
    accounts: [],
    investments: [],
  },
};

export const currentBalancesSlice = createSlice({
  name: 'summaryBalances',
  initialState,
  reducers: {
    loadAllCurrentBalances: (state, action: PayloadAction<CurrentBalances>) => ({
      ...state,
      current: {
        ...state.current,
        accounts: action.payload.accounts,
        investments: action.payload.investments,
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
