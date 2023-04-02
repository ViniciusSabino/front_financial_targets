import React from 'react';

import { Header, SummaryBalances, SummaryClosings } from '../../components/organisms';

import { Page, Main, Section } from './styles';

const Home = (): JSX.Element => (
  <Page>
    <Main>
      <Section>
        <Header title="Financial Targets" />
        <SummaryBalances />
        <SummaryClosings />
      </Section>
    </Main>
  </Page>
);

export default Home;
