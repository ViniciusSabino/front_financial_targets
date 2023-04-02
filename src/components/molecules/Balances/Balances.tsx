import React from 'react';

import { IBalance } from '../../../services/accounts/mapper';
import { CurrentBalanceTypes } from '../../../utils/enums/balances';
import { Balance } from '../../atoms';

import Styles from './styles';

const { Component } = Styles;

interface BalancesProps {
  balances: Array<IBalance>;
  balance: IBalance;
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
        <Balance
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
