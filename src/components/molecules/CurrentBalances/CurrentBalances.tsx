import React from 'react';

import { Balance } from '../../../services/SummaryBalances/service';
import BalanceComponent from '../../atoms/Balance/Balance';

import {
  Component,
  TitleContainer,
  Body,
} from './styles';

interface CurrentBalancesProps {
  balances: Array<Balance>;
}

const CurrentBalances = (props: CurrentBalancesProps): JSX.Element => {
  const { balances } = props;

  return (
    <Component>
      <TitleContainer>Saldo Atual</TitleContainer>
      <Body>
        {balances.map((balance, index) => (
          <BalanceComponent
            id={balance.id}
            index={index}
            total={balances.length}
            name={balance.name}
            value={balance.value}
          />
        ))}
      </Body>
    </Component>
  );
};

export default CurrentBalances;
