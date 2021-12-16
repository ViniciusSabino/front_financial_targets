import React from 'react';

import { Header, SummaryBalances, SummaryClosings } from '../../organisms';

import { Page } from './styles';

const Home = (): JSX.Element => (
  <Page>
    <Header />
    <SummaryBalances />
    <SummaryClosings />
  </Page>
);

export default Home;
