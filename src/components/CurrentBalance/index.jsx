import React, { useEffect, useState } from 'react';

import Balance from './Balance';
import mock from './data-mock';

import {
  Component,
  ComponentTitle,
  Title,
  Balances,
} from './styles';

const CurrentBalance = () => {
  const [currentBalances, setCurrentBalances] = useState([]);

  // Hooks
  useEffect(() => {
    const getCurrentBalances = async () => {
      const data = await mock.getCurrentBalances();
      setCurrentBalances(data);
    };
    getCurrentBalances();
  }, []);

  return (
    <Component>
      <ComponentTitle>
        <Title>Saldo Atual</Title>
      </ComponentTitle>
      <Balances>
        {currentBalances.map((balance) => (
          <Balance
            key={balance.id}
            name={balance.name}
            type={balance.balanceType}
            value={balance.currentBalance}
          />
        ))}
      </Balances>
    </Component>
  );
};

export default CurrentBalance;
