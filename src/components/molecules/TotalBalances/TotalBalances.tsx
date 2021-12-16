import React from 'react';

import { TotalBalance } from '../../../services/SummaryBalances/service';
import { TotalBalancesTypes } from '../../../utils/enums/balances';

import BalanceComponent from '../../atoms/Balance/Balance';

import {
  Component,
  TitleContainer,
  Body,
} from './styles';

interface TotalBalancesProps {
  balances: Array<TotalBalance>;
}

const getTotalBalancesLabel = (type: TotalBalancesTypes) => ({
  [TotalBalancesTypes.GENERAL]: 'Geral',
  [TotalBalancesTypes.INVESTMENTS]: 'Investimentos',
})[type];

const CurrentBalances = (props: TotalBalancesProps): JSX.Element => {
  const { balances } = props;

  return (
    <Component>
      <TitleContainer>Saldo Total</TitleContainer>
      <Body>
        {balances.map((balance, index) => (
          <BalanceComponent
            id={balance.type}
            index={index}
            total={balances.length}
            name={getTotalBalancesLabel(balance.type)}
            value={balance.value}
          />
        ))}
      </Body>
    </Component>
  );
};

export default CurrentBalances;
