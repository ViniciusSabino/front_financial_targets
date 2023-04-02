import React from 'react';

import {
  BalanceClosings,
} from '../../components/organisms';

import Header from '../../components/templates/Header/Header';

import { Page, Main, Section } from './styles';

const Home = (): JSX.Element => (
  <Page>
    <Main>
      <Section>
        <Header title="Financial Targets" />
        <BalanceClosings />
      </Section>
    </Main>
  </Page>
);

export default Home;
