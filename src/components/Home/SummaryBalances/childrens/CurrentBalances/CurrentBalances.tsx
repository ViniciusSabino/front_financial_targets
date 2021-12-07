import React from 'react';

import { Balance, TotalBalance } from '../../service';
import { Balances, TotalBalances } from '..';

import {
  Component,
  CurrentBalancesContainer,
  TotalBalancesContainer,
  CurrentTitle,
  TotalTitle,
  BalancesArea,
  TotalBalancesArea,
} from './styles';

interface CurrentBalancesProps {
  balances: Array<Balance>;
  totalBalances: Array<TotalBalance>
}

const CurrentBalances = (props: CurrentBalancesProps): JSX.Element => {
  const { balances, totalBalances } = props;

  return (
    <Component>
      <CurrentBalancesContainer>
        <CurrentTitle>Saldo Atual</CurrentTitle>
        <BalancesArea>
          <Balances balances={balances} />
        </BalancesArea>
      </CurrentBalancesContainer>

      <TotalBalancesContainer>
        <TotalTitle>Saldo Total</TotalTitle>
        <TotalBalancesArea>
          <TotalBalances balances={totalBalances} />
        </TotalBalancesArea>
      </TotalBalancesContainer>
    </Component>
  );
};

export default CurrentBalances;
