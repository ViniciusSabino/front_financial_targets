import React from 'react';

import { BalanceClosings } from '../../components/organisms';

import Header from '../../components/template/Header/Header';

import {
  Page,
  Main,
  Section,
  Module,
} from './styles';

const Home = (): JSX.Element => (
  <Page>
    <Main>
      <Section>
        <Header title="Financial Targets" />
        <BalanceClosings />
        <Module />
      </Section>
    </Main>
  </Page>
);

export default Home;
