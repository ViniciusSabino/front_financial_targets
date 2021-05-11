import { MONTH_NAME_BY_NUMBER } from './enums/dates';

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

const getCurrentMonth = () => new Date().getMonth() + 1;

const getCurrentMonthName = () => {
  const monthNumber = getCurrentMonth();

  return MONTH_NAME_BY_NUMBER[monthNumber];
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
};
