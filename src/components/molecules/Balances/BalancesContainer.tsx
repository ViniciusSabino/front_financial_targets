import React, { useEffect, useState } from 'react';

import { IBalance } from '../../../services/SummaryBalances/mapper';
import { CurrentBalanceTypes } from '../../../utils/enums/balances';

import Balances from './Balances';

interface BalancesProps {
  balances: Array<IBalance>;
  type: CurrentBalanceTypes
}

const BalancesContainer = (props: BalancesProps): JSX.Element => {
  const { balances, type } = props;

  const [currentBalance, setCurrentBalance] = useState<IBalance>();
  const [currentBalanceIndex, setCurrentBalanceIndex] = useState<number>();
  const [allBalances, setAllBalances] = useState<Array<IBalance>>([]);

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
