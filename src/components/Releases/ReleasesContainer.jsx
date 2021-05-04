import React, { useState, useEffect } from 'react';

import Releases from './Releases';

import * as date from '../../utils/dates';
import service from './service';

const ReleasesContainer = () => {
  const [recurringReleases, setRecurringReleases] = useState([]);
  const [otherReleases, setOtherReleases] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');

  const getCurrentMonth = () => setCurrentMonth(date.translationMonthsByName(date.getCurrentMonthName()));

  const getCurrentReleases = async () => {
    const releases = await service.getCurrentReleases();

    setRecurringReleases(releases.recurringReleases);
    setOtherReleases(releases.otherReleases);
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
