import React from 'react';

import { Balance } from '../../service';
import { formatInReal } from '../../../../../utils/currency/currency';

import {
  Component,
  BalanceComponent,
  Header,
  BalanceName,
  Body,
  BalanceValue,
} from './styles';

interface BalancesProps {
  balances: Array<Balance>;
}

const Balances = (props: BalancesProps): JSX.Element => {
  const { balances } = props;

  return (
    <Component>
      {balances.map((balance, index) => (
        <BalanceComponent key={balance.id} balanceIndex={index + 1} balancesLength={balances.length}>
          <Header>
            <BalanceName>{balance.name}</BalanceName>
          </Header>
          <Body>
            <BalanceValue>{formatInReal(balance.value)}</BalanceValue>
          </Body>
        </BalanceComponent>
      ))}
    </Component>
  );
};

export default Balances;
