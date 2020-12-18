import React from 'react';

import Header from '../../components/Template/Header';
import CurrentBalance from '../../components/Template/CurrentBalance';
import Division from '../../components/UI/Division';

const Bills = () => (
  <>
    <Header title="Financial Targets" />
    <CurrentBalance />
    <Division title="Minhas Contas" />
  </>
);

export default Bills;
