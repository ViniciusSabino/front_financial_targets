/* eslint-disable import/prefer-default-export */
import { getCurrentMonth } from '../../utils/dates';
import MOCKS from './MOCKS/MOCKS';
import { releasesMapping } from './helpers';

const getCurrentReleases = async () => {
  const currentMonth = getCurrentMonth();

  const data = await MOCKS.getReleases(currentMonth);

  const { recurring, other } = releasesMapping(data.releases);

  return { recurring, other };
};

const getTotalValueRecurringReleases = (recurringReleases) => recurringReleases.reduce((total, release) => total + release.value, 0);

const getTotalValueOtherReleases = (otherReleases) => otherReleases.reduce((total, release) => total + release.value, 0);

export default {
  getCurrentReleases,
  getTotalValueRecurringReleases,
  getTotalValueOtherReleases,
};
