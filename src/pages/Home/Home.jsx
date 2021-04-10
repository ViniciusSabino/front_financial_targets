import React from 'react';

import Header from '../../components/Template/Header';
import SummaryBalancesContainer from '../../components/Template/SummaryBalances/SummaryBalancesContainer';

const Home = () => (
  <>
    <Header title="Financial Targets" />
    <SummaryBalancesContainer />
  </>
);

export default Home;
