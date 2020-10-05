import React from 'react';

import {
  Header,
  Title,
} from './styles';

export default ({ title }) => {
  return (
    <Header>
      <Title>{title}</Title>   
    </Header>
  )
}
