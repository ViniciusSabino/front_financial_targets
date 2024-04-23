import React from 'react';

import { Entry } from '../../../types/accounts/entries.type';
import currency from '../../../utils/helpers/currency';
import { IInitialDataState } from '../../../slices/initialDataSlice';

import {
  Component,
  Header,
  EntriesContainer,
  Current,
  Estimated,
  CurrentTitle,
  EstimatedTitle,
  CurrentValue,
  EstimatedValue,
  Footer,
} from './styles';

interface SummaryClosingsProps {
  current: Entry;
  estimated: Entry;
  initialData: IInitialDataState;
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const { current, estimated, initialData } = props;

  return (
    <Component>
      <Header>{`${initialData.currentMonth.name} de ${initialData.currentYear}`}</Header>
      <EntriesContainer>
        <Current>
          <CurrentTitle>Total de Entradas Atual</CurrentTitle>
          <CurrentValue>{currency.formatInReal(current.value)}</CurrentValue>
        </Current>
        <Estimated>
          <EstimatedTitle>Total de Entradas Previstas</EstimatedTitle>
          <EstimatedValue>{currency.formatInReal(estimated.value)}</EstimatedValue>
        </Estimated>
      </EntriesContainer>
      <Footer />
    </Component>
  );
};

export default SummaryBalances;
