import React, { useEffect, useState } from 'react';

import 
  { 
    Header, 
    HeaderTitle, 
    Title,
    Balance,
    TopBalance,
    TitleBalance,
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
    <Header>
      <HeaderTitle>
        <Title>Saldo Atual</Title>
      </HeaderTitle>
      {currentBalances.map((balance) => 
        <Balance key={balance.id}>
          <TopBalance>
            <TitleBalance>{balance.name}</TitleBalance>
            <BalanceType>{helper.getBalanceType(balance.balanceType)}</BalanceType>
          </TopBalance>
          <BalanceValue>{`R$ ${balance.currentBalance}`}</BalanceValue>
        </Balance> 
      )}
    </Header>
  )
}

export default HeaderCurrentBalance;
