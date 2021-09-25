import api from '../../services/api';

const { releasesApi } = api;

const getCurrentReleases = async () => {
  const { recurring, other } = await releasesApi.listReleasesByPeriod('2021-09-01T00:00:00.000Z', '2021-09-30T23:59:00.000Z');

  return { recurring, other };
};

const getTotalValueRecurringReleases = (recurringReleases) => recurringReleases.reduce((total, release) => total + release.value, 0);

const getTotalValueOtherReleases = (otherReleases) => otherReleases.reduce((total, release) => total + release.value, 0);

export default {
  getCurrentReleases,
  getTotalValueRecurringReleases,
  getTotalValueOtherReleases,
};
