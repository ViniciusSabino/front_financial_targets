import React from 'react';

import { Closing } from '../../../services/SummaryClosings/service';
import currency from '../../../utils/helpers/currency';
import { IInitialDataState } from '../../../slices/initialDataSlice';

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
  initialData: IInitialDataState
  isError: boolean
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const {
    currentClosing, estimatedClosing, initialData, isError,
  } = props;

  return (
    <Component>
      <Header>
        {`Fechamento de ${initialData.currentMonth.name} de ${initialData.currentYear}`}
      </Header>
      {isError ? (
        <ClosingsContainer>
          <CurrentClosing>
            <CurrentTitle>Fechamento Atual</CurrentTitle>
            <CurrentValue>{currency.formatInReal(currentClosing.value)}</CurrentValue>
          </CurrentClosing>
          <EstimatedClosing>
            <EstimatedTitle>Fechamento Estimado</EstimatedTitle>
            <EstimatedValue>{currency.formatInReal(estimatedClosing.value)}</EstimatedValue>
          </EstimatedClosing>
        </ClosingsContainer>
      ) : <h1>ERROR</h1> }

    </Component>
  );
};

export default SummaryBalances;
