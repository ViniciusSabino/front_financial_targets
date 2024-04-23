import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Balance } from '../types/accounts/balance.type';

interface CurrentBalances {
  accounts: Array<Balance>;
  investments: Array<Balance>;
}
export interface Balances {
  current: CurrentBalances;
}

export interface CurrentBalancesState {
  balances: Balances;
}

const initialState: CurrentBalancesState = {
  balances: {
    current: {
      accounts: [],
      investments: [],
    },
  },
};

export const currentBalancesSlice = createSlice({
  name: 'summaryBalances',
  initialState,
  reducers: {
    loadAllCurrentBalances: (state, action: PayloadAction<CurrentBalances>) => ({
      ...state,
      balances: {
        current: {
          account: action.payload.accounts,
          investments: action.payload.investments,
        },
        ...state.balances,
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
