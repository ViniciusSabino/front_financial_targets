import React from 'react';

import Table from '../../UI/Table';

import {
  Component,
  Header,
  Subtitle,
  Body,
} from './styles';

const RecurringReleases = () => (
  <Component>
    <Header>
      <Subtitle>Recorrentes</Subtitle>
    </Header>
    <Body>
      <Table />
    </Body>
  </Component>
);

export default RecurringReleases;
