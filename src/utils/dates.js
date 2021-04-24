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

export {
  translationMonthsByName,
  getCurrentMonth,
};
