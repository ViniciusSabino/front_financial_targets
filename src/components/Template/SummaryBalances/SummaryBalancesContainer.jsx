import React, { useEffect, useState } from 'react';

import SummaryBalances from './SummaryBalances';

import service from './service';

const SummaryBalancesContainer = () => {
  const [currentBalances, setCurrentBalances] = useState();
  const [totalBalances, setTotalBalances] = useState();
  const [summarizedClosings, setSummarizedClosings] = useState();

  const getCurrentBalances = async () => {
    const data = await service.getCurrentBalances();

    setCurrentBalances(data.currentBalances);
    setTotalBalances(data.totalBalances);
  };

  const getSummarizedClosings = async () => setSummarizedClosings(await service.getSummarizedClosings());

  // Hooks
  useEffect(() => {
    getCurrentBalances();
    getSummarizedClosings();
  }, []);

  return (
    <SummaryBalances
      currentBalances={currentBalances}
      totalBalances={totalBalances}
      summarizedClosings={summarizedClosings}
    />
  );
};

export default SummaryBalancesContainer;
