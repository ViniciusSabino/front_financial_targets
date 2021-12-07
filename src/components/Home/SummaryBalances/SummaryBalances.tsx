import React from 'react';

import { Balance, TotalBalance, SummarizedClosingsResponse } from './service';
import { CurrentBalances } from './childrens';

import { Component } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<Balance>;
  totalBalances: Array<TotalBalance>;
  summarizedClosings: Array<SummarizedClosingsResponse>
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances } = props;

  return (
    <Component>
      <CurrentBalances
        balances={currentBalances}
        totalBalances={totalBalances}
      />
      {/* SummaryClosings */}
    </Component>
  );
};

export default SummaryBalances;
