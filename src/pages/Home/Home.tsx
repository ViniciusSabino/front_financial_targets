import React, { useEffect } from 'react';

import { useAppDispatch } from '../../hooks';
import { IPageInfoState, pageInfoActions } from '../../slices/pageInfoSlice';

import Header from '../../components/template/Header/Header';
import { BalancePanelContainer } from '../../components/organisms';

import { Page, Main, Section, Module } from './styles';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const setCurrentPage = () => {
    const pageInfo: IPageInfoState = {
      currentRoute: location.pathname,
      currentModule: 'Início',
      dataLoaded: false,
    };

    dispatch(pageInfoActions.setCurrentPage(pageInfo));
  };

  useEffect(() => {
    setCurrentPage();
  }, []);

  return (
    <Page>
      <Main>
        <Section>
          <Header title='Financial Targets' />
          <BalancePanelContainer />
          <Module />
        </Section>
      </Main>
    </Page>
  );
};

export default Home;
