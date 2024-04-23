import React from 'react';

import Header from '../../components/template/Header/Header';
import { BalancePanel } from '../../components/organisms';

import { Page, Main, Section, Module } from './styles';

const Home = (): JSX.Element => (
  <Page>
    <Main>
      <Section>
        <Header title='Financial Targets' />
        <BalancePanel />
        <Module />
      </Section>
    </Main>
  </Page>
);

export default Home;
