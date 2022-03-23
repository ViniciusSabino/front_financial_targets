/* eslint-disable react/require-default-props */
import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

import { formatInReal } from '../../../utils/helpers/currency';
import { CurrentBalanceTypes, TotalBalancesTypes } from '../../../utils/enums/balances';

import {
  Component,
  Header,
  Name,
  Body,
  PreviousBalance,
  NameArea,
  Value,
  NextBalance,
} from './styles';

interface BalanceProps {
  id: number | TotalBalancesTypes
  index: number;
  total: number;
  name: string;
  value: number;
  type: CurrentBalanceTypes | TotalBalancesTypes;
  hasIteration: boolean;
  handlePreviousBalance?: (previousIndex: number) => void;
  handleNextBalance?: (nextIndex: number) => void;
}

const Balance = (props: BalanceProps): JSX.Element => {
  const {
    id, index, total, name, value, type, hasIteration, handlePreviousBalance, handleNextBalance,
  } = props;

  return (
    <Component key={id} index={index + 1} total={total} type={type}>

      <Header>
        {hasIteration && (
        <PreviousBalance>
          {index > 0 && <AiOutlineCaretLeft onClick={() => handlePreviousBalance(index - 1)} />}
        </PreviousBalance>
        )}
        <NameArea hasIteration={hasIteration}>
          <Name>{name}</Name>
        </NameArea>
        {hasIteration && (
        <NextBalance>
          {(index < total - 1) && <AiOutlineCaretRight onClick={() => handleNextBalance(index + 1)} />}
        </NextBalance>
        )}
      </Header>
      <Body>
        <Value>{formatInReal(value)}</Value>
      </Body>
    </Component>

  );
};

export default Balance;
