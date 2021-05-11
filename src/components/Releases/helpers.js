/* eslint-disable import/prefer-default-export */
import { RELEASES_RECURRENCE, RELEASES } from './constants';

const releasesAdapter = (data) => {
  const result = data.reduce((acc, item) => {
    if (item.recurrence === RELEASES_RECURRENCE.MONTLHY.value) {
      acc.recurringReleases.push({
        ...item,
        type: RELEASES[item.type].label,
        recurrence: RELEASES_RECURRENCE[item.recurrence].label,
      });
    }

    if (item.recurrence === RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value) {
      acc.otherReleases.push({
        ...item,
        type: RELEASES[item.type].label,
        recurrence: RELEASES_RECURRENCE[item.recurrence].label,
      });
    }

    return acc;
  }, {
    recurringReleases: [],
    otherReleases: [],
  });

  return result;
};

export {
  releasesAdapter,
};
