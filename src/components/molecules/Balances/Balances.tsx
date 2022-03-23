import React from 'react';

import { Balance } from '../../../slices/SummaryBalancesSlice';
import { CurrentBalanceTypes } from '../../../utils/enums/balances';

import BalanceComponent from '../../atoms/Balance/Balance';

import { Component } from './styles';

interface BalancesProps {
  balances: Array<Balance>;
  balance: Balance;
  balanceIndex: number;
  handlePreviousBalance: (previousIndex: number) => void;
  handleNextBalance: (nextIndex: number) => void;
  type: CurrentBalanceTypes;
}

const Balances = (props: BalancesProps): JSX.Element => {
  const {
    balance, balanceIndex, balances, handlePreviousBalance, handleNextBalance, type,
  } = props;

  if (balance) {
    return (
      <Component type={type}>
        <BalanceComponent
          key={balance.id}
          id={balance.id}
          index={balanceIndex}
          total={balances.length}
          name={balance.name}
          value={balance.value}
          type={type}
          hasIteration
          handlePreviousBalance={handlePreviousBalance}
          handleNextBalance={handleNextBalance}
        />

      </Component>
    );
  }

  return null;
};

export default Balances;
