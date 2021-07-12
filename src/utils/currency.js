/* eslint-disable import/prefer-default-export */
const formatInReal = (value) => {
  const [reais, centavos] = `${value}`.split('.');

  const numbers = [...reais];

  const formattedValue = numbers
    .reverse()
    .reduce((formatted, number, index) => {
      const realPosition = index + 1;

      if (realPosition % 3 === 0 && realPosition < numbers.length) {
        return `.${number}${formatted}`;
      }

      return `${number}${formatted}`;
    }, '');

  return `R$ ${formattedValue},${centavos || '00'}`;
};

export {
  formatInReal,
};
