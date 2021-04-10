import React from 'react';

import helpers from './helpers';

import {
  Component,
  SummaryTitleComponent,
  SummaryTitle,
  Balance,
  BalanceHeader,
  BalanceName,
  BalanceBody,
  BalanceValue,
} from './styles';

const { prepareBalanceData } = helpers;

const SummaryBalances = ({ summary }) => {
  const balances = summary ? prepareBalanceData(summary) : [];

  return (
    <Component>
      <SummaryTitleComponent position="left">
        <SummaryTitle>Saldo Atual</SummaryTitle>
      </SummaryTitleComponent>

      <SummaryTitleComponent position="right">
        <SummaryTitle>Saldo Total</SummaryTitle>
      </SummaryTitleComponent>

      {balances.map((balance) => (
        <Balance
          key={balance.name}
          position={balance.position}
          bordered={balance.bordered}
        >
          <BalanceHeader>
            <BalanceName>{balance.name}</BalanceName>
          </BalanceHeader>
          <BalanceBody>
            <BalanceValue>{balance.value}</BalanceValue>
          </BalanceBody>
        </Balance>
      ))}
    </Component>

  );
};

export default SummaryBalances;
