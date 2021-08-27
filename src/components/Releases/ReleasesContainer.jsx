import React, { useState, useEffect } from 'react';

import Releases from './Releases';

import * as date from '../../utils/dates';
import service from './service';

const ReleasesContainer = () => {
  // State
  const [recurringReleases, setRecurringReleases] = useState([]);
  const [otherReleases, setOtherReleases] = useState([]);
  const [currentDate, setCurrentDate] = useState({});
  const [totalValueRecurringReleases, setTotalValueRecurringReleases] = useState(0);
  const [totalVaueOtherReleases, setTotalVaueOtherReleases] = useState(0);
  const [totalValueReleases, setTotalValueReleases] = useState(0);

  const getCurrentDate = () => {
    const monthName = date.getCurrentMonthName();
    const monthTraslated = date.translationMonthsByName(monthName);

    const year = date.getCurrentYear();

    setCurrentDate({
      monthName: monthTraslated,
      year,
    });
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

  const getTotalValueReleases = (totalRecurringReleases, totalOtherReleases) => setTotalValueReleases(totalRecurringReleases + totalOtherReleases);

  // Hooks
  useEffect(() => {
    getCurrentDate();
    getCurrentReleases();
  }, []);

  useEffect(() => {
    getTotalValueRecurringReleases(recurringReleases);
    getTotalValueOtherReleases(otherReleases);
  }, [recurringReleases, otherReleases]);

  useEffect(() => {
    getTotalValueReleases(totalValueRecurringReleases, totalVaueOtherReleases);
  }, [totalValueRecurringReleases, totalVaueOtherReleases]);

  return (
    <Releases
      currentDate={currentDate}
      recurringReleases={recurringReleases}
      otherReleases={otherReleases}
      totalValueRecurringReleases={totalValueRecurringReleases}
      totalVaueOtherReleases={totalVaueOtherReleases}
      totalValueReleases={totalValueReleases}
    />
  );
};

export default ReleasesContainer;
