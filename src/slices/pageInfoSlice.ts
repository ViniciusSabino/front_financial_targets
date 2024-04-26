import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPageInfoState {
  currentRoute: string;
  currentModule: string;
  dataLoaded: boolean;
}

const initialState: IPageInfoState = {
  currentRoute: '',
  currentModule: '',
  dataLoaded: false,
};

export const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<IPageInfoState>) => ({
      ...state,
      currentRoute: action.payload.currentRoute,
      currentModule: action.payload.currentModule,
    }),
    setDataLoaded: (state, action: PayloadAction<boolean>) => ({
      ...state,
      dataLoaded: action.payload,
    }),
  },
});

// reducer
export default pageInfoSlice.reducer;

// actions
const { setCurrentPage, setDataLoaded } = pageInfoSlice.actions;

export const pageInfoActions = {
  setCurrentPage,
  setDataLoaded,
};
