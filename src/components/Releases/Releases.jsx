import React from 'react';
import PropTypes from 'prop-types';

import { TableReleases } from './childrens';

import {
  Component,
  Header,
  Title,
  Body,
  Footer,
} from './styles';

const Releases = ({
  currentMonth,
  recurringReleases,
  otherReleases,
  totalValueRecurringReleases,
  totalVaueOtherReleases,
}) => {
  const title = `Lançamentos de ${currentMonth}`;

  return (
    <Component>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <TableReleases
          releases={recurringReleases}
          subtitle="Recorrentes"
          totalReleases={{
            title: 'Total de Entradas Recorrentes',
            value: totalValueRecurringReleases,
          }}
        />
        <TableReleases
          releases={otherReleases}
          subtitle="Outras Entradas"
          totalReleases={{
            title: 'Total para Outras Entradas',
            value: totalVaueOtherReleases,
          }}
        />
      </Body>
      <Footer />
    </Component>
  );
};

Releases.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  recurringReleases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })),
  otherReleases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })),
  totalValueRecurringReleases: PropTypes.number.isRequired,
  totalVaueOtherReleases: PropTypes.number.isRequired,
};

Releases.defaultProps = {
  recurringReleases: [],
  otherReleases: [],
};

export default Releases;
