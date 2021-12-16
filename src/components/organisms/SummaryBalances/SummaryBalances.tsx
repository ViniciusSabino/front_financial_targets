import React from 'react';

import { Balance, TotalBalance } from '../../../services/SummaryBalances/service';
import { CurrentBalances, TotalBalances } from '../../molecules';

import { Component, CurrentBalancesContainer, TotalBalancesContainer } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<Balance>;
  totalBalances: Array<TotalBalance>;
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances } = props;

  return (
    <Component>
      <CurrentBalancesContainer>
        <CurrentBalances balances={currentBalances} />
      </CurrentBalancesContainer>
      <TotalBalancesContainer>
        <TotalBalances balances={totalBalances} />
      </TotalBalancesContainer>
    </Component>
  );
};

export default SummaryBalances;
