import { getMonthNameByNumber, translationMonthsByName } from '../../../../../utils/dates';
import { TYPES_OF_CLOSINGS } from '../../constants';

/* eslint-disable import/prefer-default-export */
const mountDescription = (month, type) => {
  const monthName = translationMonthsByName(getMonthNameByNumber(month));

  return TYPES_OF_CLOSINGS[type].templateDescription.replace('{{month}}', monthName);
};

export {
  mountDescription,
};
