import { configureStore } from '@reduxjs/toolkit';

import initialDataReducer from './slices/initialDataSlice';
import currentBalancesReducer from './slices/CurrentBalancesSlice';

export const store = configureStore({
  reducer: {
    initialData: initialDataReducer,
    currentBalances: currentBalancesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
