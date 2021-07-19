import React, { useState, useEffect } from 'react';

import Releases from './Releases';

import * as date from '../../utils/dates';
import service from './service';

const ReleasesContainer = () => {
  // State
  const [recurringReleases, setRecurringReleases] = useState([]);
  const [otherReleases, setOtherReleases] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [totalValueRecurringReleases, setTotalValueRecurringReleases] = useState(0);
  const [totalVaueOtherReleases, setTotalVaueOtherReleases] = useState(0);

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

  const getTotalValueRecurringReleases = (data) => {
    const total = service.getTotalValueRecurringReleases(data);

    setTotalValueRecurringReleases(total);
  };

  const getTotalValueOtherReleases = (data) => {
    const total = service.getTotalValueOtherReleases(data);

    setTotalVaueOtherReleases(total);
  };

  // Hooks
  useEffect(() => {
    getCurrentMonth();
    getCurrentReleases();
  }, []);

  useEffect(() => {
    getTotalValueRecurringReleases(recurringReleases);
    getTotalValueOtherReleases(otherReleases);
  }, [recurringReleases, otherReleases]);

  return (
    <Releases
      currentMonth={currentMonth}
      recurringReleases={recurringReleases}
      otherReleases={otherReleases}
      totalValueRecurringReleases={totalValueRecurringReleases}
      totalVaueOtherReleases={totalVaueOtherReleases}
    />
  );
};

export default ReleasesContainer;
