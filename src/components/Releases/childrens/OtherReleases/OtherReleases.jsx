import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../UI/Table';
import { TABLE_RELEASES_COLUMNS, TABLE_RELEASES_ACTIONS } from '../../constants';

import {
  Component,
  Header,
  Subtitle,
  Body,
} from './styles';

const OtherReleases = ({ releases }) => (
  <Component>
    <Header>
      <Subtitle>Outras Entradas</Subtitle>
    </Header>
    <Body>
      <Table
        headers={TABLE_RELEASES_COLUMNS}
        actions={TABLE_RELEASES_ACTIONS}
        data={releases}
      />
    </Body>
  </Component>
);

OtherReleases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })).isRequired,
};

export default OtherReleases;
