import React from 'react';

import Header from '../../components/Header/index.jsx';
import CurrentBalance from '../../components/CurrentBalance/index.jsx';

const Home = () => {
  return (
    <>
      <Header title='Financial Targets' />
      <CurrentBalance /> 
    </>
  )
}

export default Home;
