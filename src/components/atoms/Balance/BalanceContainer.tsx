import React, { useEffect, useState } from 'react';

import { Balance } from '../../../types/accounts/balance.type';
import { CurrentBalanceTypes } from '../../../enums/accounts/balance.enum';

import BalanceComponent from './Balance';

interface BalanceProps {
  balances: Array<Balance>;
  type: CurrentBalanceTypes;
}

const BalanceContainer = (props: BalanceProps): JSX.Element => {
  const { balances, type } = props;

  const [current, setCurrent] = useState<Balance>();
  const [currentIndex, setCurrentIndex] = useState<number>();
  const [allBalances, setAllBalances] = useState<Array<Balance>>([]);

  const handlePrevious = (previousIndex: number): void => {
    if (previousIndex >= 0) {
      setCurrent(allBalances[previousIndex]);
      setCurrentIndex(previousIndex);
    }
  };

  const handleNext = (nextIndex: number): void => {
    if (nextIndex < allBalances.length) {
      setCurrent(allBalances[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    setAllBalances(balances);
    setCurrent(balances.find((balance) => balance.account.main));
    setCurrentIndex(balances.findIndex((balance) => balance.account.main));
  }, [balances]);

  return (
    <BalanceComponent
      balance={current}
      index={currentIndex}
      balances={allBalances}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      type={type}
    />
  );
};

export default BalanceContainer;
