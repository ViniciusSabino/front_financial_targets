import React, { useEffect, useState } from 'react';

import Balance from './Balance/index.jsx';

import { 
  Component, 
  ComponentTitle, 
  Title,
  Balances
} from './styles';

import mock from './data-mock';

const HeaderCurrentBalance = () => {
  const [ currentBalances, setCurrentBalances ] = useState([]);

  // Hooks
  useEffect(() => {
    const getCurrentBalances = async () => {
      const data = await mock.getCurrentBalances();
      setCurrentBalances(data);
    }
    getCurrentBalances();
  })

  return (
    <Component>
      <ComponentTitle>
        <Title>Saldo Atual</Title>
      </ComponentTitle>
      <Balances>
       {currentBalances.map((balance) => 
          <Balance 
            id={balance.id} 
            name={balance.name} 
            type={balance.balanceType} 
            value={balance.currentBalance} 
          />
      )} 
      </Balances>
    </Component>
  )
}

export default HeaderCurrentBalance;
