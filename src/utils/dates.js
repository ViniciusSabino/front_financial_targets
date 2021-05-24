import { MONTHS } from './enums/dates';

const translationMonthsByName = (monthName) => ({
  JANUARY: 'Janeiro',
  FEBRUARY: 'Fevereiro',
  MARCH: 'Março',
  APRIL: 'Abril',
  MAY: 'Maio',
  JUNE: 'Junho',
  JULY: 'Julho',
  AUGUST: 'Agosto',
  SEPTEMBER: 'Setembro',
  OCTOBER: 'Outubro',
  NOVEMBER: 'Novembro',
  DECEMBER: 'Dezembro',
}[monthName]);

const getMonthNameByNumber = (number) => ({
  1: MONTHS.JANUARY,
  2: MONTHS.FEBRUARY,
  3: MONTHS.MARCH,
  4: MONTHS.APRIL,
  5: MONTHS.MAY,
  6: MONTHS.JUNE,
  7: MONTHS.JULY,
  8: MONTHS.AUGUST,
  9: MONTHS.SEPTEMBER,
  10: MONTHS.OCTOBER,
  11: MONTHS.NOVEMBER,
  12: MONTHS.DECEMBER,
})[number];

const getCurrentMonth = () => new Date().getMonth() + 1;

const getCurrentMonthName = () => {
  const monthNumber = getCurrentMonth();

  return getMonthNameByNumber(monthNumber);
};

const getEveryMonthTranslated = () => [
  'Janeiro',
  'Feveiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'];

export {
  translationMonthsByName,
  getCurrentMonth,
  getCurrentMonthName,
  getEveryMonthTranslated,
  getMonthNameByNumber,
};
