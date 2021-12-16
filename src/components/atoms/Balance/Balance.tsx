import React from 'react';

import { Balance } from '../../../services/SummaryBalances/service';
import { formatInReal } from '../../../utils/helpers/currency';
import { TotalBalancesTypes } from '../../../utils/enums/balances';

import {
  Component,
  Header,
  Name,
  Body,
  Value,
} from './styles';

interface BalanceProps {
  id: number | TotalBalancesTypes
  index: number;
  total: number;
  name: string;
  value: number;
}

const Balance = (props: BalanceProps): JSX.Element => {
  const {
    id, index, total, name, value,
  } = props;

  return (
    <Component key={id} index={index + 1} total={total}>
      <Header>
        <Name>{name}</Name>
      </Header>
      <Body>
        <Value>{formatInReal(value)}</Value>
      </Body>
    </Component>

  );
};

export default Balance;
