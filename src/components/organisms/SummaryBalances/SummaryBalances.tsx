import React from 'react';

import { Balance } from '../../../slices/SummaryBalancesSlice';
import { CurrentBalances, TotalBalances } from '../../molecules';
import { ITotalBalances } from '../../../services/SummaryBalances/helper';

import { Component, CurrentBalancesContainer, TotalBalancesContainer } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<Balance>;
  totalBalances: ITotalBalances;
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances } = props;

  return (
    <Component>
      <CurrentBalancesContainer>
        <CurrentBalances
          balances={currentBalances}
        />
      </CurrentBalancesContainer>
      <TotalBalancesContainer>
        <TotalBalances total={totalBalances} />
      </TotalBalancesContainer>
    </Component>
  );
};

export default SummaryBalances;
