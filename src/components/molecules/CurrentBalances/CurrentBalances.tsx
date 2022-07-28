import React from 'react';

import { IBalance } from '../../../services/accounts/balances/mapper';
import { CurrentBalanceTypes } from '../../../utils/enums/balances';

import BalancesContainer from '../Balances/BalancesContainer';

import {
  Component,
  TitleContainer,
  Body,
  InfoContainer,
} from './styles';

interface CurrentBalancesProps {
  balances: Array<IBalance>;
}

const CurrentBalances = (props: CurrentBalancesProps): JSX.Element => {
  const { balances } = props;

  const accounts = balances.filter((balance) => balance.type === CurrentBalanceTypes.ACCOUNT);
  const investments = balances.filter((balance) => balance.type === CurrentBalanceTypes.INVESTMENT);

  return (
    <Component>
      <TitleContainer>Saldo Atual</TitleContainer>
      <Body>
        {accounts.length
          ? (
            <>
              <BalancesContainer balances={accounts} type={CurrentBalanceTypes.ACCOUNT} />
              <BalancesContainer balances={investments} type={CurrentBalanceTypes.INVESTMENT} />
            </>
          )
          : <><InfoContainer>Não há contas para exibir</InfoContainer></>}

      </Body>
    </Component>
  );
};

export default CurrentBalances;
