import React from 'react';

import { CurrentBalances, TotalBalances } from '../../molecules';
import { IBalance, ITotalBalances } from '../../../services/accounts/mapper';

import { Component, CurrentBalancesContainer, TotalBalancesContainer } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<IBalance>;
  totalBalances: ITotalBalances;
  isLoading: boolean;
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances, isLoading } = props;

  return (
    <Component>
      <CurrentBalancesContainer>
        <CurrentBalances balances={currentBalances} isLoading={isLoading} />
      </CurrentBalancesContainer>
      <TotalBalancesContainer>
        <TotalBalances total={totalBalances} />
      </TotalBalancesContainer>
    </Component>
  );
};

export default SummaryBalances;
