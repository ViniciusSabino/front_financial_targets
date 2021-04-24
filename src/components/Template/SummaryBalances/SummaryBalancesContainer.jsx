import React, { useEffect, useState } from 'react';

import SummaryBalances from './SummaryBalances';

import service from './service';

const SummaryBalancesContainer = () => {
  const [currentBalances, setCurrentBalances] = useState();
  const [summarizedClosings, setSummarizedClosings] = useState();

  const getCurrentBalances = async () => setCurrentBalances(await service.getCurrentBalances());
  const getSummarizedClosings = async () => setSummarizedClosings(await service.getSummarizedClosings());

  // Hooks
  useEffect(() => {
    getCurrentBalances();
    getSummarizedClosings();
  }, []);

  return (
    <SummaryBalances
      balancesGroup={currentBalances}
      closings={summarizedClosings}
    />
  );
};

export default SummaryBalancesContainer;
