import React from 'react';

import { Balance } from '../../../slices/SummaryBalancesSlice';
import { CurrentBalanceTypes } from '../../../utils/enums/balances';

import BalancesContainer from '../Balances/BalancesContainer';

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

  const accounts = balances.filter((balance) => balance.type === CurrentBalanceTypes.ACCOUNT);
  const investments = balances.filter((balance) => balance.type === CurrentBalanceTypes.INVESTMENT);

  return (
    <Component>
      <TitleContainer>
        Saldo Atual
      </TitleContainer>
      <Body>
        {/* Accounts */}
        <BalancesContainer balances={accounts} type={CurrentBalanceTypes.ACCOUNT} />

        {/* Investments */}
        <BalancesContainer balances={investments} type={CurrentBalanceTypes.INVESTMENT} />
      </Body>
    </Component>
  );
};

export default CurrentBalances;
