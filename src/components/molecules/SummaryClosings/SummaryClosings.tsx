import React from 'react';

import { Closing } from '../../../services/closings/service';
import currency from '../../../utils/helpers/currency';
import { IInitialDataState } from '../../../slices/initialDataSlice';

import {
  Component,
  Header,
  ClosingsContainer,
  Current,
  Estimated,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
  Footer,
} from './styles';

interface SummaryClosingsProps {
  current: Closing,
  estimated: Closing,
  initialData: IInitialDataState
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const { current, estimated, initialData } = props;

  return (
    <Component>
      <Header>
        {`Fechamento de ${initialData.currentMonth.name} de ${initialData.currentYear}`}
      </Header>
      <ClosingsContainer>
        <Current>
          <CurrentTitle>Fechamento Atual</CurrentTitle>
          <CurrentValue>{currency.formatInReal(current.value)}</CurrentValue>
        </Current>
        <Estimated>
          <EstimatedTitle>Fechamento Estimado</EstimatedTitle>
          <EstimatedValue>{currency.formatInReal(estimated.value)}</EstimatedValue>
        </Estimated>
      </ClosingsContainer>
      <Footer />
    </Component>
  );
};

export default SummaryBalances;
