import { MONTH_NUMBER_BY_NAME } from '../../../utils/enums/dates';
import { RELEASES, RELEASES_RECURRENCE } from '../constants';

const RELEASES_AUGUST = {
  month: 7,
  releases: [
    {
      name: 'Salário Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-07-20T20:35:27.780Z',
      value: 8183,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Adiantamento Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-07-20T20:35:27.780Z',
      value: 5300.50,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Pix de Caroline Aguiar',
      type: RELEASES.OTHERS.type,
      date: '2021-07-20T20:35:27.780Z',
      value: 300,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value,
      account: 'Principal',
    },
  ],
};

const RELEASES_AUGUST = {
  month: 8,
  releases: [
    {
      name: 'Salário Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-08-20T20:35:27.780Z',
      value: 900.11,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Adiantamento Dextra',
      type: RELEASES.SALARY.type,
      date: '2021-08-20T20:35:27.780Z',
      value: 19000.11,
      recurrence: RELEASES_RECURRENCE.MONTLHY.value,
      account: 'Principal',
    },
    {
      name: 'Pix de Nívea Maria',
      type: RELEASES.OTHERS.type,
      date: '2021-08-20T20:35:27.780Z',
      value: 10000190,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value,
      account: 'Principal',
    },
    {
      name: 'Pix de Nívea Maria',
      type: RELEASES.OTHERS.type,
      date: '2021-08-20T20:35:27.780Z',
      value: 1000091.99,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE.value,
      account: 'Principal',
    },
    {
      name: 'Transferencia de Odair',
      type: RELEASES.OTHERS.type,
      date: '2021-08-20T20:35:27.780Z',
      value: 10.19,
      recurrence: RELEASES_RECURRENCE.WITHOUT_RECURRENCE,
      account: 'Principal',
    },
  ],
};

const GET_OF_THE_MONTH_SPECIFIC = {
  [MONTH_NUMBER_BY_NAME.JULY]: RELEASES_JULY,
  [MONTH_NUMBER_BY_NAME.AUGUST]: RELEASES_AUGUST,
};

const getReleases = (monthNumber) => Promise.resolve(GET_OF_THE_MONTH_SPECIFIC[monthNumber]);

export default {
  getReleases,
};
