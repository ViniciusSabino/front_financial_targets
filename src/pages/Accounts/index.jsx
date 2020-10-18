import React from 'react';

import Header from '../../components/Header';
import CurrentBalance from '../../components/CurrentBalance';

import Module from '../../modules/Accounts';

const Accounts = () => (
  <>
    <Header title="Financial Targets" />
    <CurrentBalance />
    <Module />
  </>
);

export default Accounts;
