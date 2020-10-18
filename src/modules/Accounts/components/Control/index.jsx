import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import mock from './data-mock';

import {
  Component,
  Header,
  Body,
} from './styles';

const Control = ({ title }) => {
  const [goals, setGoals] = useState([]);
  const [displayGoals, setDiplayGoals] = useState([]);
  const [totalGoals, setTotalGoals] = useState({});

  // Hooks
  useEffect(() => {
    const getGoals = async () => {
      const { display, items, total } = await mock.getGoals();

      setGoals(items);
      setDiplayGoals(display);
      setTotalGoals(total);
    };
    getGoals();
  }, []);

  return (
    <Component>
      <Header>{title}</Header>
      <Body />
    </Component>
  );
};

Control.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Control;
