import React, { useState, useEffect } from 'react';

import Releases from './Releases';

import * as date from '../../utils/dates';
import service from './service';

const ReleasesContainer = () => {
  const [recurringReleases, setRecurringReleases] = useState([]);
  const [otherReleases, setOtherReleases] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');

  const getCurrentMonth = () => {
    const monthName = date.getCurrentMonthName();
    const monthTraslated = date.translationMonthsByName(monthName);

    setCurrentMonth(monthTraslated);
  };

  const getCurrentReleases = async () => {
    const { recurring, other } = await service.getCurrentReleases();

    setRecurringReleases(recurring);
    setOtherReleases(other);
  };

  // Hooks
  useEffect(() => {
    getCurrentMonth();
    getCurrentReleases();
  }, []);

  return (
    <Releases
      currentMonth={currentMonth}
      recurringReleases={recurringReleases}
      otherReleases={otherReleases}
    />
  );
};

export default ReleasesContainer;
