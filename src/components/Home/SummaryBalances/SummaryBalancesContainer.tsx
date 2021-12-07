import React, { useEffect, useState } from 'react';

import service, { TotalBalance, Balance, SummarizedClosingsResponse } from './service';

import SummaryBalances from './SummaryBalances';

const currentBalancesEmptyState: Array<Balance> = [];
const totalBalancesEmptyState: Array<TotalBalance> = [];
const summarizedClosingsEmptyState: Array<SummarizedClosingsResponse> = [];

const SummaryBalancesContainer = (): JSX.Element => {
  const [currentBalances, setCurrentBalances] = useState(currentBalancesEmptyState);
  const [totalBalances, setTotalBalances] = useState(totalBalancesEmptyState);
  const [summarizedClosings, setSummarizedClosings] = useState(summarizedClosingsEmptyState);

  const getAllBalances = async () => {
    const balances = await service.getCurrentBalances();

    const total = service.getTotalBalances(balances);

    setCurrentBalances(balances);
    setTotalBalances(total);
  };

  const getSummarizedClosings = async () => setSummarizedClosings(await service.getSummarizedClosings());

  // Hooks
  useEffect(() => {
    getAllBalances();
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
