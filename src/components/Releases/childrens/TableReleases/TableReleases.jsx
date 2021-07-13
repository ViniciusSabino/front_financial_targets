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

const TableReleases = ({ releases, subtitle }) => (
  <Component>
    <Header>
      <Subtitle>{subtitle}</Subtitle>
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

TableReleases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })).isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TableReleases;
