import React, { useEffect, useState } from 'react';

import { Balance } from '../../../services/accounts/mapper';
import { CurrentBalanceTypes } from '../../../utils/enums/accounts.enum';

import DisplayBalance from './DisplayBalance';

interface DisplayBalanceProps {
  balances: Array<Balance>;
  type: CurrentBalanceTypes
}

const DisplayBalanceContainer = (props: DisplayBalanceProps): JSX.Element => {
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
    setCurrent(balances.find(((balance) => balance.isMain)));
    setCurrentIndex(balances.findIndex((balance) => balance.isMain));
  }, [balances]);

  return (
    <DisplayBalance
      balance={current}
      index={currentIndex}
      balances={allBalances}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
      type={type}
    />
  );
};

export default DisplayBalanceContainer;
