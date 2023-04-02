import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from '../../../hooks';
import service from '../../../services/accounts/service';
import { Balance, TotalBalances } from '../../../services/accounts/mapper';
import { currentBalancesActions } from '../../../slices/CurrentBalancesSlice';
import { TotalBalancesTypes } from '../../../utils/enums/accounts.enum';

import CurrentBalances from './CurrentBalances';

const CurrentBalancesContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);

  const [currentBalances, setCurrentBalances] = useState([] as Array<Balance>);
  const [totalBalances, setTotalBalances] = useState({
    general: { type: TotalBalancesTypes.GENERAL, value: 0 },
    investments: { type: TotalBalancesTypes.INVESTMENTS, value: 0 },
  } as TotalBalances);

  const [isLoading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const getAllBalances = async () => {
    const balances = await service.getCurrentBalances();

    dispatch(currentBalancesActions.loadAllCurrentBalances(balances));

    return balances;
  };

  const getTotalBalances = () => {
    const total = service.getTotalBalances(currentBalances);

    setTotalBalances(total);
  };

  useEffect(() => {
    isMountedRef.current = true;

    getAllBalances().then((balances) => {
      if (isMountedRef.current) {
        setCurrentBalances(balances);
        setLoading(false);
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
    <CurrentBalances
      currentBalances={currentBalances}
      totalBalances={totalBalances}
      isLoading={isLoading}
    />
  );
};

export default CurrentBalancesContainer;
