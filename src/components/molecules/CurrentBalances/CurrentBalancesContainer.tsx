import React, { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from '../../../hooks';
import { currentBalancesActions } from '../../../slices/CurrentBalancesSlice';
import { TotalBalancesTypes } from '../../../utils/enums/accounts.enum';

import service from '../../../services/accounts/service';

import CurrentBalances from './CurrentBalances';
import { Balance, TotalBalances } from '../../../services/accounts/mapper';

const CurrentBalancesContainer = (): JSX.Element => {
  const isMountedRef = useRef(false);

  const [accounts, setAccounts] = useState([] as Array<Balance>);
  const [investments, setInvestments] = useState([] as Array<Balance>);

  const [totalBalances, setTotalBalances] = useState({
    general: { type: TotalBalancesTypes.GENERAL, value: 0 },
    investments: { type: TotalBalancesTypes.INVESTMENTS, value: 0 },
  } as TotalBalances);

  const [isLoading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  const getAllBalances = async () => {
    const currentBalances = await service.getCurrentBalances();
    console.log(currentBalances)

    dispatch(currentBalancesActions.loadAllCurrentBalances(currentBalances));

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
        setAccounts(currentBalances.accounts)
        setInvestments(currentBalances.investments)
        setLoading(false);
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
