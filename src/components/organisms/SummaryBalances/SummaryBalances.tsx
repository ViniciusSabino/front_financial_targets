import React from 'react';

import { CurrentBalances, TotalBalances } from '../../molecules';
import { IBalance, ITotalBalances } from '../../../services/accounts/balances/mapper';

import { Component, CurrentBalancesContainer, TotalBalancesContainer } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<IBalance>;
  totalBalances: ITotalBalances;
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances } = props;

  return (
    <Component>
      <CurrentBalancesContainer>
        <CurrentBalances balances={currentBalances} />
      </CurrentBalancesContainer>
      <TotalBalancesContainer>
        <TotalBalances total={totalBalances} />
      </TotalBalancesContainer>
    </Component>
  );
};

export default SummaryBalances;
