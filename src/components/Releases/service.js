/* eslint-disable import/prefer-default-export */
import { getCurrentMonth } from '../../utils/dates';
import MOCKS from './MOCKS';
import { releasesMapping } from './helpers';

const getCurrentReleases = async () => {
  const currentMonth = getCurrentMonth();

  const data = await MOCKS.getReleases(currentMonth);

  const { recurring, other } = releasesMapping(data.releases);

  return { recurring, other };
};

export default {
  getCurrentReleases,
};
