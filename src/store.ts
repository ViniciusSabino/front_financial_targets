import { configureStore } from '@reduxjs/toolkit';

import pageInfoSlice from './slices/pageInfoSlice';
import dateInfoSlice from './slices/dateInfoSlice';
import currentBalancesReducer from './slices/CurrentBalancesSlice';

export const store = configureStore({
  reducer: {
    pageInfo: pageInfoSlice,
    dateInfo: dateInfoSlice,
    balances: currentBalancesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
