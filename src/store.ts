import { configureStore } from '@reduxjs/toolkit';

import initialDataReducer from './slices/initialDataSlice';
import summaryBalancesReducer from './slices/SummaryBalancesSlice';

export const store = configureStore({
  reducer: {
    initialData: initialDataReducer,
    summaryBalances: summaryBalancesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
