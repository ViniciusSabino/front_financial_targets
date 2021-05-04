import React from 'react';
import PropTypes from 'prop-types';

import { OtherReleases, RecurringReleases } from './childrens';

import {
  Component,
  Header,
  Title,
  Body,
  Footer,
} from './styles';

const Releases = ({ currentMonth, recurringReleases, otherReleases }) => (
  <Component>
    <Header>
      <Title>
        Lançamentos de
        {' '}
        {currentMonth}
      </Title>
    </Header>
    <Body>
      <RecurringReleases releases={recurringReleases} />
      <OtherReleases releases={otherReleases} />
    </Body>
    <Footer />
  </Component>
);

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
