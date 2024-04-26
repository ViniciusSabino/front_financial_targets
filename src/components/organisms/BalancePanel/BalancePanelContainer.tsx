import React from 'react';

import { useAppSelector } from '../../../hooks';
import { IDateInfoState } from '../../../slices/dateInfoSlice';
import { IPageInfoState } from '../../../slices/pageInfoSlice';

import BalancePanel from './BalancePanel';

const BalancePanelContainer = (): JSX.Element => {
  const dateInfoState = useAppSelector<IDateInfoState>((state) => state.dateInfo);
  const pageInfoState = useAppSelector<IPageInfoState>((state) => state.pageInfo);

  return (
    <BalancePanel
      dateInfo={dateInfoState}
      currentModule={pageInfoState.currentModule}
      currentRoute={pageInfoState.currentRoute}></BalancePanel>
  );
};

export default BalancePanelContainer;
