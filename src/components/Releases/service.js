/* eslint-disable import/prefer-default-export */
import { getCurrentMonth } from '../../utils/dates';
import MOCKS from './MOCKS';
import { releasesAdapter } from './helpers';

const getCurrentReleases = async () => {
  const currentMonth = getCurrentMonth();

  const data = await MOCKS.getReleases(currentMonth);

  return releasesAdapter(data.releases);
};

export default {
  getCurrentReleases,
};
