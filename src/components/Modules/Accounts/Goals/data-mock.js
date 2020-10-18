const getGoals = () => Promise.resolve({
  items: [
    {
      description: 'Longo Prazo (Aposentadoria)',
      suggestedValue: 21.00,
      customizedValue: 30.10,
      amountPaid: 50.00,
      remainingAmount: 10.00,
    },
    {
      description: 'Meus Objetivos',
      suggestedValue: 51.00,
      customizedValue: 80.10,
      amountPaid: 55.00,
      remainingAmount: 9.00,
    },
    {
      description: 'Educação',
      suggestedValue: 51.00,
      customizedValue: 80.10,
      amountPaid: 55.00,
      remainingAmount: 9.00,
    },
    {
      description: 'Viagens',
      suggestedValue: 51.00,
      customizedValue: 80.10,
      amountPaid: 55.00,
      remainingAmount: 9.00,
    },
  ],
  total: {
    suggestedValue: 200.10,
    customizedValue: 390.10,
    amountPaid: 191.00,
    remainingAmount: 1820.10,
  },
  display: [
    'Descrição',
    'Valor Sugerido',
    'Valor Definido',
    'Valor Pago',
    'Valor Restante',
  ],
});

export default {
  getGoals,
};
