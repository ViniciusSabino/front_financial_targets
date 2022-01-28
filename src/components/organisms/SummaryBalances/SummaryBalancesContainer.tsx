import React, { useEffect, useState } from 'react';

import service, { TotalBalance, Balance } from '../../../services/SummaryBalances/service';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import applicationService from '../../../services/Application/service';

import SummaryBalances from './SummaryBalances';
import { initialDataActions, InitialDataState } from '../../../features/application/initialDataSlice';

const currentBalancesEmptyState: Array<Balance> = [];
const totalBalancesEmptyState: Array<TotalBalance> = [];

const SummaryBalancesContainer = (): JSX.Element => {
  const [currentBalances, setCurrentBalances] = useState(currentBalancesEmptyState);
  const [totalBalances, setTotalBalances] = useState(totalBalancesEmptyState);

  const dispatch = useAppDispatch();
  const initialDataState = useAppSelector<InitialDataState>((state) => state.initialData);

  const getInitialData = () => {
    const initialData = applicationService.getInitialData();

    dispatch(initialDataActions.load(initialData));
  };

  const getAllBalances = async () => {
    const balances = await service.getCurrentBalances();

    const total = service.getTotalBalances(balances);

    setCurrentBalances(balances);
    setTotalBalances(total);
  };

  // Hooks
  useEffect(() => {
    getInitialData();
    getAllBalances();
  }, []);

  return (
    <SummaryBalances
      currentBalances={currentBalances}
      totalBalances={totalBalances}
      initialData={initialDataState}
    />
  );
};

export default SummaryBalancesContainer;
