/* eslint-disable import/prefer-default-export */
import { formatInReal } from '../../utils/currency';
import { RELEASES_RECURRENCE, RELEASES } from './constants';

const releasesMapping = (data) => {
  const result = data.reduce((acc, item) => {
    if (item.recurrence === RELEASES_RECURRENCE.MONTLHY.value) {
      acc.recurring.push({
        ...item,
        value: formatInReal(item.value),
        type: RELEASES[item.type].label,
        recurrence: RELEASES_RECURRENCE[item.recurrence].label,
      });
    }

    if (item.recurrence === RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value) {
      acc.other.push({
        ...item,
        value: formatInReal(item.value),
        type: RELEASES[item.type].label,
        recurrence: RELEASES_RECURRENCE[item.recurrence].label,
      });
    }

    return acc;
  }, {
    recurring: [],
    other: [],
  });

  return result;
};

export {
  releasesMapping,
};
