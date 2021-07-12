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

const Releases = ({ currentMonth, recurringReleases, otherReleases }) => {
  const title = `Lançamentos de ${currentMonth}`;

  return (
    <Component>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body>
        <TableReleases releases={recurringReleases} subtitle="Recorrentes" />
        <TableReleases releases={otherReleases} subtitle="Outras Entradas" />
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
};

Releases.defaultProps = {
  recurringReleases: [],
  otherReleases: [],
};

export default Releases;
