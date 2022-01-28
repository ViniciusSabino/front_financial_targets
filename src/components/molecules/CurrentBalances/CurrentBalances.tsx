import React from 'react';

import { Balance } from '../../../services/SummaryBalances/service';
import { MonthsTranslated } from '../../../utils/enums/date';
import BalanceComponent from '../../atoms/Balance/Balance';

import {
  Component,
  TitleContainer,
  Body,
} from './styles';

interface CurrentBalancesProps {
  balances: Array<Balance>;
  monthName: MonthsTranslated,
}

const CurrentBalances = (props: CurrentBalancesProps): JSX.Element => {
  const { balances, monthName } = props;

  return (
    <Component>
      <TitleContainer>
        {`Saldo Atual de ${monthName}`}
      </TitleContainer>
      <Body>
        {balances.map((balance, index) => (
          <BalanceComponent
            id={balance.id}
            index={index}
            total={balances.length}
            name={balance.name}
            value={balance.value}
          />
        ))}
      </Body>
    </Component>
  );
};

export default CurrentBalances;
