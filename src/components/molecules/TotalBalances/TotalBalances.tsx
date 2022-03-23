import React from 'react';

import { ITotalBalances } from '../../../services/SummaryBalances/helper';
import { TotalBalancesTypes } from '../../../utils/enums/balances';

import BalanceComponent from '../../atoms/Balance/Balance';

import {
  Component,
  TitleContainer,
  Body,
} from './styles';

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
        <BalanceComponent
          key={TotalBalancesTypes.GENERAL}
          id={TotalBalancesTypes.GENERAL}
          index={0}
          total={2}
          name={TOTAL_BALANCES_LABEL.general}
          value={total.general.value}
          hasIteration={false}
          type={TotalBalancesTypes.GENERAL}
        />
        <BalanceComponent
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
