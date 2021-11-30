import React, { useEffect, useState } from 'react';

import service, { TotalBalances } from './service';
import { Balance } from './MOCKS/MOCKS';

import SummaryBalances from './SummaryBalances';

const currentBalancesEmptyState: Array<Balance> = [];
const totalBalancesEmptyState: Array<TotalBalances> = [];

const SummaryBalancesContainer = (): JSX.Element => {
  const [currentBalances, setCurrentBalances] = useState(currentBalancesEmptyState);
  const [totalBalances, setTotalBalances] = useState(totalBalancesEmptyState);

  // const [totalBalances, setTotalBalances] = useState();
  // const [summarizedClosings, setSummarizedClosings] = useState();

  const getCurrentBalances = async () => {
    const balances = await service.getCurrentBalances();

    setCurrentBalances(balances);
  };

  const getTotalBalances = () => {
    const total = service.getTotalBalances(currentBalances);

    setTotalBalances(total);
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
