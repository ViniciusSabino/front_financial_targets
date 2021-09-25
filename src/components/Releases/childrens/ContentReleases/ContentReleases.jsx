import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

import Table from '../../../UI/Table';
import {
  TABLE_RELEASES_COLUMNS, TABLE_RELEASES_ACTIONS, RELEASES, RELEASES_RECURRENCE,
} from '../../constants';
import { formatInReal } from '../../../../utils/currency';

import {
  Component,
  Header,
  Subtitle,
  Body,
  Footer,
  TotalReleases,
  TotalReleasesValue,
} from './styles';

const ContentReleases = ({ releases, subtitle, totalReleases }) => {
  const data = releases.map((release) => ({
    ...R.omit(['id'], release),
    value: formatInReal(release.value),
    type: RELEASES[release.type].label,
    recurrence: RELEASES_RECURRENCE[release.recurrence].label,
  }));

  return (
    <Component>
      <Header>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Body>
        <Table
          headers={TABLE_RELEASES_COLUMNS}
          actions={TABLE_RELEASES_ACTIONS}
          data={data}
        />
      </Body>
      <Footer>
        <TotalReleases>
          {`${totalReleases.title}: `}
          <TotalReleasesValue>
            {formatInReal(totalReleases.value)}
          </TotalReleasesValue>
        </TotalReleases>
      </Footer>
    </Component>
  );
};

ContentReleases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    recurrence: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  })).isRequired,
  subtitle: PropTypes.string.isRequired,
  totalReleases: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default ContentReleases;
