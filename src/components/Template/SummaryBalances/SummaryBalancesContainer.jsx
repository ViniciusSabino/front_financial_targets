import React, { useEffect, useState } from 'react';

import SummaryBalances from './SummaryBalances';

import MOCK from './mock';

import { currentBalancesAdapter, summarizedClosingsAdapter } from './helpers';

const SummaryBalancesContainer = () => {
  const [currentBalances, setCurrentBalances] = useState();
  const [summarizedClosings, setSummarizedClosings] = useState();

  const getCurrentBalances = async () => {
    const data = await MOCK.getCurrentBalances();
    const balances = currentBalancesAdapter(data);

    setCurrentBalances(balances);
  };

  const getSummarizedClosings = async () => {
    const data = await MOCK.getSummarizedClosings();
    const closings = summarizedClosingsAdapter(data);

    setSummarizedClosings(closings);
  };

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
