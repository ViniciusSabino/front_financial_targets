import React from 'react';

import Header from '../../components/Header/index.jsx';
import CurrentBalance from '../../components/CurrentBalance/index.jsx';
import Division from '../../components/Division/index.jsx';

import Module from '../../modules/Accounts/index.jsx';

const Accounts = () => {
  return (
    <>
      <Header title='Financial Targets' />
      <CurrentBalance /> 
      <Division title='Contas' />
      <Module />
      <Division title='Resumo' />
    </>
  )
}

export default Accounts;
