import React from 'react';

import { CurrentBalancesContainer, SummaryClosingsContainer } from '../../molecules';

import { Component } from './styles';

const BalanceClosings = (): JSX.Element => (
  <Component>
    <CurrentBalancesContainer />
    <SummaryClosingsContainer />
  </Component>
);

export default BalanceClosings;
