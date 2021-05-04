import { MONTH_NUMBER_BY_NAME } from '../../utils/enums/dates';
import { RELEASES, RELEASES_RECURRENCE } from './constants';

const RELEASES_APRIL = {
  month: 4,
  releases: [
    {
      name: 'Salário Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-04-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Adiantamento Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-04-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Pix de Caroline Aguiar',
      type: RELEASES.OTHERS.type,
      date: '2021-04-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value,
      account: 'Principal',
    },
  ],
};

const RELEASES_MAY = {
  month: 5,
  releases: [
    {
      name: 'Salário Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-05-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Adiantamento Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-05-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Pix de Nívea Maria',
      type: RELEASES.OTHERS.type,
      date: '2021-05-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value,
      account: 'Principal',
    },
    {
      name: 'Pix de Nívea Maria',
      type: RELEASES.OTHERS.type,
      date: '2021-05-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value,
      account: 'Principal',
    },
    {
      name: 'Transferencia de Odair',
      type: RELEASES.OTHERS.type,
      date: '2021-05-20T20:35:27.780Z',
      value: 10.000,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE,
      account: 'Principal',
    },
  ],
};

const GET_OF_THE_MONTH_SPECIFIC = {
  [MONTH_NUMBER_BY_NAME.APRIL]: RELEASES_APRIL,
  [MONTH_NUMBER_BY_NAME.MAY]: RELEASES_MAY,
};

const getReleases = (monthNumber) => Promise.resolve(GET_OF_THE_MONTH_SPECIFIC[monthNumber]);

export default {
  getReleases,
};
