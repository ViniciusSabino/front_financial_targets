import { Months } from '../enums/dates';

const translationMonthsByName = (monthName: Months): string => ({
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

const getMonthNameByNumber = (number: number): string => ({
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
})[number];

const getCurrentMonth = (): number => new Date().getMonth() + 1;

const getCurrentMonthName = (): string => {
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
  'Dezembro'];

const getCurrentYear = (): number => new Date().getFullYear();

export {
  translationMonthsByName,
  getCurrentMonth,
  getCurrentMonthName,
  getEveryMonthTranslated,
  getMonthNameByNumber,
  getCurrentYear,
};
