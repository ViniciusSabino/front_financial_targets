import React from 'react';

import { APPLICATION_NAME } from '../../utils/constants';

import Header from '../../components/Template/Header';
import SummaryBalancesContainer from '../../components/Template/SummaryBalances/SummaryBalancesContainer';

import ReleasesComponent from '../../components/Releases/Releases';

const Releases = () => (
  <>
    {/* Template */}
    <Header title={APPLICATION_NAME} />
    <SummaryBalancesContainer />

    <ReleasesComponent />
  </>
);

export default Releases;
