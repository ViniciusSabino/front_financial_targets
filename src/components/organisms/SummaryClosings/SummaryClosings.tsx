import React from 'react';

import { Closing } from '../../../services/SummaryClosings/service';
import { formatInReal } from '../../../utils/helpers/currency';
import { InitialDataState } from '../../../slices/initialDataSlice';

import {
  Component,
  Header,
  ClosingsContainer,
  CurrentClosing,
  EstimatedClosing,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
} from './styles';

interface SummaryClosingsProps {
  currentClosing: Closing,
  estimatedClosing: Closing,
  initialData: InitialDataState
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const { currentClosing, estimatedClosing, initialData } = props;

  return (
    <Component>
      <Header>
        {`Fechamento de ${initialData.currentMonth.name} de ${initialData.currentYear}`}
      </Header>
      <ClosingsContainer>
        <CurrentClosing>
          <CurrentTitle>
            Fechamento Atual
          </CurrentTitle>
          <CurrentValue>
            {formatInReal(currentClosing.value)}
          </CurrentValue>
        </CurrentClosing>
        <EstimatedClosing>
          <EstimatedTitle>
            Fechamento Estimado
          </EstimatedTitle>
          <EstimatedValue>
            {formatInReal(estimatedClosing.value)}
          </EstimatedValue>
        </EstimatedClosing>
      </ClosingsContainer>
    </Component>
  );
};

export default SummaryBalances;
