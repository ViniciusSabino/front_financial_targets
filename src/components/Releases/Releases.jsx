import React from 'react';
import PropTypes from 'prop-types';

import { ContentReleases, HeaderReleasesMonth } from './childrens';
import { formatInReal } from '../../utils/currency';

import {
  Component,
  Body,
  Footer,
  TotalReleases,
  TotalReleasesValue,
} from './styles';

const Releases = ({
  currentDate,
  recurringReleases,
  otherReleases,
  totalValueRecurringReleases,
  totalVaueOtherReleases,
  totalValueReleases,
}) => (
  <Component>
    <HeaderReleasesMonth currentDate={currentDate} />
    <Body>
      <ContentReleases
        releases={recurringReleases}
        subtitle="Recorrentes"
        totalReleases={{
          title: 'Total de Entradas Recorrentes',
          value: totalValueRecurringReleases,
        }}
      />
      <ContentReleases
        releases={otherReleases}
        subtitle="Outras Entradas"
        totalReleases={{
          title: 'Total para Outras Entradas',
          value: totalVaueOtherReleases,
        }}
      />
    </Body>
    <Footer>
      <TotalReleases>
        {'Total de Entradas no mês: '}
        <TotalReleasesValue>
          {formatInReal(totalValueReleases)}
        </TotalReleasesValue>
      </TotalReleases>
    </Footer>
  </Component>
);

Releases.propTypes = {
  currentDate: PropTypes.shape({
    monthName: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  recurringReleases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })),
  otherReleases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })),
  totalValueRecurringReleases: PropTypes.number.isRequired,
  totalVaueOtherReleases: PropTypes.number.isRequired,
  totalValueReleases: PropTypes.number.isRequired,
};

Releases.defaultProps = {
  recurringReleases: [],
  otherReleases: [],
};

export default Releases;
