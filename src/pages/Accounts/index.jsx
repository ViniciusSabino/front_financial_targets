import React from 'react';

import Header from '../../components/Header/index.jsx';
import CurrentBalance from '../../components/CurrentBalance/index.jsx';

const Accounts = () => {
  return (
    <>
      <Header title='Financial Targets' />
      <CurrentBalance /> 
      <Header title='Contas e Mensalidades' />
    </>
  )
}

export default Accounts;
