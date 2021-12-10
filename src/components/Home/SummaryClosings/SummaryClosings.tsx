import React from 'react';

import { Closing } from './service';
import { formatInReal } from '../../../utils/currency/currency';

import {
  Component,
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
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const { currentClosing, estimatedClosing } = props;

  return (
    <Component>
      <CurrentClosing>
        <CurrentTitle>
          Fechamento Atual para o mês de Dezembro de 2021
        </CurrentTitle>
        <CurrentValue>
          {formatInReal(currentClosing.value)}
        </CurrentValue>
      </CurrentClosing>
      <EstimatedClosing>
        <EstimatedTitle>
          Fechamento Estimado para o mês de Dezembro de 2021
        </EstimatedTitle>
        <EstimatedValue>
          {formatInReal(estimatedClosing.value)}
        </EstimatedValue>
      </EstimatedClosing>
    </Component>
  );
};

export default SummaryBalances;
