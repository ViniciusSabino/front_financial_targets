import React, { useEffect, useState } from 'react';

import 
  { 
    Component, 
    ComponentTitle, 
    Title,
    Balances,
    Balance,
    HeaderBalance,
    BalanceType,
    BalanceValue,
  } from './styles';

import mock from './data-mock';
import helper from './helper';

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
          <Balance key={balance.id}>
            <HeaderBalance>
              {balance.name}
              <BalanceType>
                {helper.getBalanceType(balance.balanceType)}
              </BalanceType>
            </HeaderBalance>
            <BalanceValue>
              {`R$ ${balance.currentBalance}`}
            </BalanceValue> 
          </Balance> 
      )} 
      </Balances>
    </Component>
  )
}

export default HeaderCurrentBalance;
