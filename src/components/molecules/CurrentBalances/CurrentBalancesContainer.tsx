import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from '../../../hooks';
import { currentBalancesActions } from '../../../slices/CurrentBalancesSlice';
import { TotalBalancesTypes } from '../../../enums/accounts/balance.enum';
import { Balance, TotalBalances } from '../../../types/accounts/balance.type';
import service from '../../../services/accounts/service';
import { pageInfoActions } from '../../../slices/pageInfoSlice';

import CurrentBalances from './CurrentBalances';

const CurrentBalancesContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);

  const dispatch = useAppDispatch();

  const [accounts, setAccounts] = useState([] as Array<Balance>);
  const [investments, setInvestments] = useState([] as Array<Balance>);

  const [totalBalances, setTotalBalances] = useState({
    general: { type: TotalBalancesTypes.GENERAL, value: 0 },
    investments: { type: TotalBalancesTypes.INVESTMENTS, value: 0 },
  } as TotalBalances);

  const [isLoading, setLoading] = useState(true);

  const getAllBalances = async () => {
    const currentBalances = await service.getCurrentBalances();

    dispatch(currentBalancesActions.loadAllCurrentBalances(currentBalances));
    dispatch(pageInfoActions.setDataLoaded(true));

    return currentBalances;
  };

  const getTotalBalances = () => {
    const totalBalances = service.getTotalBalances(accounts, investments);

    setTotalBalances(totalBalances);
  };

  useEffect(() => {
    isMountedRef.current = true;

    getAllBalances().then((currentBalances) => {
      if (isMountedRef.current) {
        setAccounts(currentBalances.accounts);
        setInvestments(currentBalances.investments);
        setLoading(false);
        dispatch(currentBalancesActions.loadAllCurrentBalances(currentBalances));
      }
    });

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    getTotalBalances();
  }, [accounts, investments]);

  return (
    <CurrentBalances
      accounts={accounts}
      investments={investments}
      totalBalances={totalBalances}
      isLoading={isLoading}
    />
  );
};

export default CurrentBalancesContainer;
