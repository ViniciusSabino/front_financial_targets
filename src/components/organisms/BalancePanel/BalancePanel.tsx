import React from 'react';

import { CurrentBalancesContainer, SummaryEntriesContainer } from '../../molecules';

import { Component } from './styles';

const BalancePanel = (): JSX.Element => (
  <Component>
    <CurrentBalancesContainer />
    <SummaryEntriesContainer />
  </Component>
);

export default BalancePanel;
