import React from 'react';

import { Header, SummaryBalances, SummaryClosings } from '../../organisms';

import Style from './styles';

const { Page } = Style;

const Home = (): JSX.Element => (
  <Page>
    <Header />
    <SummaryBalances />
    <SummaryClosings />
  </Page>
);

export default Home;
