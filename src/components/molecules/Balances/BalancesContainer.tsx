import React, { useEffect, useState } from 'react';

import { Balance } from '../../../slices/SummaryBalancesSlice';
import { CurrentBalanceTypes } from '../../../utils/enums/balances';

import Balances from './Balances';

interface BalancesProps {
  balances: Array<Balance>;
  type: CurrentBalanceTypes
}

const BalancesContainer = (props: BalancesProps): JSX.Element => {
  const { balances, type } = props;

  const [currentBalance, setCurrentBalance] = useState<Balance>();
  const [currentBalanceIndex, setCurrentBalanceIndex] = useState<number>();
  const [allBalances, setAllBalances] = useState<Array<Balance>>([]);

  const handlePreviousBalance = (previousIndex: number): void => {
    if (previousIndex >= 0) {
      setCurrentBalance(allBalances[previousIndex]);
      setCurrentBalanceIndex(previousIndex);
    }
  };

  const handleNextBalance = (nextIndex: number): void => {
    if (nextIndex < allBalances.length) {
      setCurrentBalance(allBalances[nextIndex]);
      setCurrentBalanceIndex(nextIndex);
    }
  };

  useEffect(() => {
    setAllBalances(balances);
    setCurrentBalance(balances.find(((balance) => balance.isMain)));
    setCurrentBalanceIndex(balances.findIndex((balance) => balance.isMain));
  }, [balances]);

  return (
    <Balances
      balance={currentBalance}
      balanceIndex={currentBalanceIndex}
      balances={allBalances}
      handlePreviousBalance={handlePreviousBalance}
      handleNextBalance={handleNextBalance}
      type={type}
    />
  );
};

export default BalancesContainer;
