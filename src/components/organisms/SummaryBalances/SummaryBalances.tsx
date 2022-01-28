import React from 'react';

import { InitialDataState } from '../../../features/application/initialDataSlice';
import { Balance, TotalBalance } from '../../../services/SummaryBalances/service';
import { CurrentBalances, TotalBalances } from '../../molecules';

import { Component, CurrentBalancesContainer, TotalBalancesContainer } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<Balance>;
  totalBalances: Array<TotalBalance>;
  initialData: InitialDataState;
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances, initialData } = props;

  return (
    <Component>
      <CurrentBalancesContainer>
        <CurrentBalances
          balances={currentBalances}
          monthName={initialData.currentMonth.name}
        />
      </CurrentBalancesContainer>
      <TotalBalancesContainer>
        <TotalBalances balances={totalBalances} />
      </TotalBalancesContainer>
    </Component>
  );
};

export default SummaryBalances;
