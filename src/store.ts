import { configureStore } from '@reduxjs/toolkit';

import initialDataReducer from './features/application/initialDataSlice';

export const store = configureStore({
  reducer: {
    initialData: initialDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
