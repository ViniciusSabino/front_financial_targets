import React from 'react';

import Header from '../../components/Header';
import CurrentBalance from '../../components/CurrentBalance';

const Accounts = () => {
  return (
    <div>
      <Header title='Financial Targets' />
      <CurrentBalance /> 
      <Header title='Contas e Mensalidades' />
    </div>
  )
}

export default Accounts;
