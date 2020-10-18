import React from 'react';
import PropTypes from 'prop-types';

import {
  Component,
  Header,
  Body,
} from './styles';

const BillsToPay = ({ title }) => (
  <Component>
    <Header>{title}</Header>
    <Body />
  </Component>
);

BillsToPay.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BillsToPay;
