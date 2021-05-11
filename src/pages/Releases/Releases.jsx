import React from 'react';

import { APPLICATION_NAME } from '../../utils/constants';

import Header from '../../components/Template/Header';
import SummaryBalancesContainer from '../../components/Template/SummaryBalances/SummaryBalancesContainer';
import ReleasesContainer from '../../components/Releases/ReleasesContainer';

const Releases = () => (
  <>

    <Header title={APPLICATION_NAME} />
    <SummaryBalancesContainer />

    <ReleasesContainer />
  </>
);

export default Releases;
