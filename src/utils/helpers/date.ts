import moment from 'moment';

import { MonthNumberByName, Months, MonthsTranslated } from '../../enums/date.enum';

export interface Month {
  name: MonthsTranslated;
  month: MonthNumberByName;
}

const translationMonthsByName = (monthName: Months): MonthsTranslated => ({
  JANUARY: MonthsTranslated.JANUARY,
  FEBRUARY: MonthsTranslated.FEBRUARY,
  MARCH: MonthsTranslated.MARCH,
  APRIL: MonthsTranslated.APRIL,
  MAY: MonthsTranslated.MAY,
  JUNE: MonthsTranslated.JUNE,
  JULY: MonthsTranslated.JULY,
  AUGUST: MonthsTranslated.AUGUST,
  SEPTEMBER: MonthsTranslated.SEPTEMBER,
  OCTOBER: MonthsTranslated.OCTOBER,
  NOVEMBER: MonthsTranslated.NOVEMBER,
  DECEMBER: MonthsTranslated.DECEMBER,
}[monthName]);

const getMonthNameByNumber = (number: number): Months => ({
  1: Months.JANUARY,
  2: Months.FEBRUARY,
  3: Months.MARCH,
  4: Months.APRIL,
  5: Months.MAY,
  6: Months.JUNE,
  7: Months.JULY,
  8: Months.AUGUST,
  9: Months.SEPTEMBER,
  10: Months.OCTOBER,
  11: Months.NOVEMBER,
  12: Months.DECEMBER,
}[number]);

const getCurrentMonth = (): number => new Date().getMonth() + 1;

const getCurrentMonthName = (): Months => {
  const monthNumber = getCurrentMonth();

  return getMonthNameByNumber(monthNumber);
};

const getEveryMonthTranslated = (): string[] => [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const getCurrentYear = (): number => new Date().getFullYear();

const getCurrentDate = (): string => moment().format('YYYY-MM-DD');

export default {
  translationMonthsByName,
  getCurrentMonth,
  getCurrentMonthName,
  getEveryMonthTranslated,
  getMonthNameByNumber,
  getCurrentYear,
  getCurrentDate,
};
