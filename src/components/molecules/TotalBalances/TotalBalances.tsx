import React from 'react';

import { ITotalBalances } from '../../../services/SummaryBalances/mapper';
import { TotalBalancesTypes } from '../../../utils/enums/balances';

import { Balance } from '../../atoms';

import { Component, TitleContainer, Body } from './styles';

interface TotalBalancesProps {
  total: ITotalBalances;
}

const TOTAL_BALANCES_LABEL = {
  general: 'Geral',
  investments: 'Investimentos',
};

const CurrentBalances = (props: TotalBalancesProps): JSX.Element => {
  const { total } = props;

  return (
    <Component>
      <TitleContainer>Saldo Total</TitleContainer>
      <Body>
        <Balance
          key={TotalBalancesTypes.GENERAL}
          id={TotalBalancesTypes.GENERAL}
          index={0}
          total={2}
          name={TOTAL_BALANCES_LABEL.general}
          value={total.general.value}
          hasIteration={false}
          type={TotalBalancesTypes.GENERAL}
        />
        <Balance
          key={TotalBalancesTypes.INVESTMENTS}
          id={TotalBalancesTypes.INVESTMENTS}
          index={1}
          total={2}
          name={TOTAL_BALANCES_LABEL.investments}
          value={total.investments.value}
          hasIteration={false}
          type={TotalBalancesTypes.INVESTMENTS}
        />
      </Body>
    </Component>
  );
};

export default CurrentBalances;
