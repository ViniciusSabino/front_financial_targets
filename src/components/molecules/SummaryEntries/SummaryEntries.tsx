import React from 'react';
import { Link } from 'react-router-dom';

import { Entry } from '../../../types/accounts/entries.type';
import currency from '../../../utils/helpers/currency';

import {
  Component,
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
}

const SummaryBalances = (props: SummaryClosingsProps): JSX.Element => {
  const { current, estimated } = props;

  return (
    <Component>
      <EntriesContainer>
        <Current>
          <Link to={{ pathname: '/entradas' }}>
            <CurrentTitle>Total de Entradas Atual</CurrentTitle>
          </Link>
          <CurrentValue>{currency.formatInReal(current.value)}</CurrentValue>
        </Current>
        <Estimated>
          <Link to={{ pathname: '/entradas' }}>
            <EstimatedTitle>Total de Entradas Previstas</EstimatedTitle>
          </Link>
          <EstimatedValue>{currency.formatInReal(estimated.value)}</EstimatedValue>
        </Estimated>
      </EntriesContainer>
      <Footer />
    </Component>
  );
};

export default SummaryBalances;
