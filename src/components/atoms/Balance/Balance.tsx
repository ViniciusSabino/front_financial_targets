import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { CurrentBalanceTypes } from '../../../enums/accounts/balance.enum';
import { Balance } from '../../../types/accounts/balance.type';
import currency from '../../../utils/helpers/currency';
import { AccountType } from '../../../enums/accounts/accounts.enum';

import { Component, BalanceComponent, Header, Previous, NameHeader, TextName, Next, Body, TextValue } from './styles';

interface DisplayBalancesProps {
  balances: Array<Balance>;
  balance: Balance;
  index: number;
  handlePrevious: (previousIndex: number) => void;
  handleNext: (nextIndex: number) => void;
  type: CurrentBalanceTypes;
}

const reduceAccountName = (name: string) => {
  return name.length > 8 ? `${name.substring(0, 5)}...` : name;
};

const Balance = (props: DisplayBalancesProps): JSX.Element => {
  const { balance, index, balances, handlePrevious, handleNext, type } = props;

  if (balance) {
    return (
      <Component type={type}>
        <BalanceComponent key={balance.id} index={index + 1} total={balances.length} type={type}>
          <Header>
            <Previous>
              <AiOutlineLeft color={index ? '#fff' : '#2F5164'} onClick={() => handlePrevious(index - 1)} />
            </Previous>
            <NameHeader>
              <TextName>
                {balance.account.main && balance.account.type == AccountType.CHECKING_ACCOUNT
                  ? reduceAccountName(balance.account.name)
                  : balance.account.name}
              </TextName>
            </NameHeader>
            <Next>
              <AiOutlineRight
                color={index < balances.length - 1 ? '#fff' : '#2F5164'}
                onClick={() => handleNext(index + 1)}
              />
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
