import React from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';

import { Balance } from '../../../services/accounts/mapper';
import { CurrentBalanceTypes } from '../../../utils/enums/accounts.enum';
import currency from '../../../utils/helpers/currency';

import {
  Component, BalanceComponent, Header, Previous, NameHeader, TextName, Next, Body, TextValue,
} from './styles';

interface DisplayBalancesProps {
  balances: Array<Balance>;
  balance: Balance;
  index: number;
  handlePrevious: (previousIndex: number) => void;
  handleNext: (nextIndex: number) => void;
  type: CurrentBalanceTypes;
}

const Balance = (props: DisplayBalancesProps): JSX.Element => {
  const {
    balance, index, balances, handlePrevious, handleNext, type,
  } = props;

  if (balance) {
    return (
      <Component type={type}>
        <BalanceComponent key={balance.id} index={index + 1} total={balances.length} type={type}>
          <Header>
            <Previous>
              {index > 0 && <AiOutlineCaretLeft onClick={() => handlePrevious(index - 1)} />}
            </Previous>
            <NameHeader>
              <TextName>{balance.name}</TextName>
            </NameHeader>
            <Next>
              {(index < balances.length - 1) && <AiOutlineCaretRight onClick={() => handleNext(index + 1)} />}
            </Next>
          </Header>
          <Body>
            <TextValue>{currency.formatInReal(balance.value)}</TextValue>
          </Body>
        </BalanceComponent>
      </Component>
    );
  }

  return null;
};

export default Balance;
