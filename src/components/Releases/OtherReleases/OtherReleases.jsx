import React from 'react';
import Table from '../../UI/Table';

import {
  Component,
  Header,
  Subtitle,
  Body,
} from './styles';

const OtherReleases = () => (
  <Component>
    <Header>
      <Subtitle>Outras Entradas</Subtitle>
    </Header>
    <Body>
      <Table />
    </Body>
  </Component>
);

export default OtherReleases;
