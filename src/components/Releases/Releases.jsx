import React from 'react';
import OtherReleases from './OtherReleases/OtherReleases';
import RecurringReleases from './RecurringReleases/RecurringReleases';

import {
  Component,
  Header,
  Title,
  Body,
  Footer,
} from './styles';

const Releases = () => (
  <Component>
    <Header>
      <Title>Lançamentos de Abril</Title>
    </Header>
    <Body>
      <RecurringReleases />
      <OtherReleases />
    </Body>
    <Footer />
  </Component>
);

export default Releases;
