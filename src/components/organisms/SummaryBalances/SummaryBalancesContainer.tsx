import React, { useEffect, useState } from 'react';

import service, { TotalBalance, Balance } from '../../../services/SummaryBalances/service';

import SummaryBalances from './SummaryBalances';

const currentBalancesEmptyState: Array<Balance> = [];
const totalBalancesEmptyState: Array<TotalBalance> = [];

const SummaryBalancesContainer = (): JSX.Element => {
  const [currentBalances, setCurrentBalances] = useState(currentBalancesEmptyState);
  const [totalBalances, setTotalBalances] = useState(totalBalancesEmptyState);

  const getAllBalances = async () => {
    const balances = await service.getCurrentBalances();

    const total = service.getTotalBalances(balances);

    setCurrentBalances(balances);
    setTotalBalances(total);
  };

  // Hooks
  useEffect(() => {
    getAllBalances();
  }, []);

  return (
    <SummaryBalances
      currentBalances={currentBalances}
      totalBalances={totalBalances}
    />
  );
};

export default SummaryBalancesContainer;
