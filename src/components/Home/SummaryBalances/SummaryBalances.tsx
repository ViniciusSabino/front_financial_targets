import React from 'react';

import { Balance, TotalBalance } from './service';
import { CurrentBalances } from './childrens';

import { Component } from './styles';

export interface SummaryBalancesProps {
  currentBalances: Array<Balance>;
  totalBalances: Array<TotalBalance>;
}

const SummaryBalances = (props: SummaryBalancesProps): JSX.Element => {
  const { currentBalances, totalBalances } = props;

  return (
    <Component>
      <CurrentBalances
        balances={currentBalances}
        totalBalances={totalBalances}
      />
    </Component>
  );
};

export default SummaryBalances;
