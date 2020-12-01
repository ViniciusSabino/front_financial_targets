import React from 'react';

import Header from '../../components/Header';
import CurrentBalance from '../../components/CurrentBalance';
import Division from '../../components/Division';

const Accounts = () => (
  <>
    <Header title="Financial Targets" />
    <CurrentBalance />
    <Division title="Minhas Contas" />
  </>
);

export default Accounts;
