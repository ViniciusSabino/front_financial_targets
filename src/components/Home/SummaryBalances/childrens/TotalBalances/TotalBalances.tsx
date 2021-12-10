import React from 'react';

import { TotalBalance } from '../../service';
import { formatInReal } from '../../../../../utils/currency/currency';
import { TotalBalancesTypes } from '../../../../../utils/enums/balances';

import {
  Component,
  TotalComponent,
  Header,
  TotalName,
  Body,
  TotalValue,
} from './styles';

interface BalancesProps {
  balances: Array<TotalBalance>;
}

const getTotalBalancesLabel = (type: TotalBalancesTypes) => ({
  [TotalBalancesTypes.GENERAL]: 'Geral',
  [TotalBalancesTypes.INVESTMENTS]: 'Investimentos',
})[type];

const TotalBalances = (props: BalancesProps): JSX.Element => {
  const { balances } = props;

  return (
    <Component>
      {balances.map((balance, index) => (
        <TotalComponent key={balance.type} totalIndex={index + 1} totalLength={balances.length}>
          <Header>
            <TotalName>{getTotalBalancesLabel(balance.type)}</TotalName>
          </Header>
          <Body>
            <TotalValue>{formatInReal(balance.value)}</TotalValue>
          </Body>
        </TotalComponent>
      ))}
    </Component>
  );
};

export default TotalBalances;
