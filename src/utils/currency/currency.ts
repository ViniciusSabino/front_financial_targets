/* eslint-disable import/prefer-default-export */
const formatInReal = (value: string): string => {
  const [reais, centavos] = `${value}`.split('.');

  const numbers: string[] = [...reais];

  const formattedValue = numbers
    .reverse()
    .reduce((formatted, number, index) => {
      const realPosition = index + 1;

      if (realPosition % 3 === 0 && realPosition < numbers.length) {
        return `.${number}${formatted}`;
      }

      return `${number}${formatted}`;
    }, '');

  const partiallyFormatted = `R$ ${formattedValue},`;

  if (centavos) {
    return `${centavos.length === 1 ? `${partiallyFormatted}${centavos}0` : `${partiallyFormatted}${centavos}`}`;
  }

  return `${partiallyFormatted}00`;
};

export {
  formatInReal,
};
