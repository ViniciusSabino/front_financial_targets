import React from 'react';

import { APPLICATION_NAME } from '../../utils/constants';

import Header from '../../components/Template/Header';
import SummaryBalancesContainer from '../../components/Home/SummaryBalances/SummaryBalancesContainer';
import SummaryClosingsContainer from '../../components/Home/SummaryClosings/SummaryClosingsContainer';

const Home = (): JSX.Element => (
  <>
    <Header title={APPLICATION_NAME} />
    <SummaryBalancesContainer />
    <SummaryClosingsContainer />
  </>
);

export default Home;
