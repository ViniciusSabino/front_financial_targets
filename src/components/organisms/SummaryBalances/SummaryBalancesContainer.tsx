import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from '../../../hooks';
import { ITotalBalances } from '../../../services/SummaryBalances/helper';
import service from '../../../services/SummaryBalances/service';
import { Balance, summaryBalancesActions } from '../../../slices/SummaryBalancesSlice';
import { TotalBalancesTypes } from '../../../utils/enums/balances';

import SummaryBalances from './SummaryBalances';

const currentBalancesEmptyState: Array<Balance> = [];
const totalBalancesEmptyState: ITotalBalances = {
  general: { type: TotalBalancesTypes.GENERAL, value: 0 },
  investments: { type: TotalBalancesTypes.INVESTMENTS, value: 0 },
};

const SummaryBalancesContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);

  const [currentBalances, setCurrentBalances] = useState(currentBalancesEmptyState);
  const [totalBalances, setTotalBalances] = useState(totalBalancesEmptyState);

  const dispatch = useAppDispatch();

  const getAllBalances = async () => {
    const balances = await service.getCurrentBalances();

    dispatch(summaryBalancesActions.loadAllCurrentBalances(balances));

    return balances;
  };

  const getTotalBalances = () => {
    const total = service.getTotalBalances(currentBalances);

    setTotalBalances(total);
  };

  // Hooks
  useEffect(() => {
    isMountedRef.current = true;

    getAllBalances().then((balances) => {
      if (isMountedRef.current) {
        setCurrentBalances(balances);
      }
    });

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    getTotalBalances();
  }, [currentBalances]);

  return (
    <SummaryBalances
      currentBalances={currentBalances}
      totalBalances={totalBalances}
    />
  );
};

export default SummaryBalancesContainer;
