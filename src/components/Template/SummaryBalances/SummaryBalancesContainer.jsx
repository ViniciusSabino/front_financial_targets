import React, { useEffect, useState } from 'react';

import SummaryBalances from './SummaryBalances';

import MOCK from './mock';

const SummaryBalancesContainer = () => {
  const [summaryBalances, setSummaryBalances] = useState();

  // Hooks
  useEffect(() => {
    const getSummaryBalances = async () => {
      const data = await MOCK.getSummaryBalances();
      setSummaryBalances(data);
    };
    getSummaryBalances();
  }, []);

  return (
    <SummaryBalances summary={summaryBalances} />
  );
};

export default SummaryBalancesContainer;
