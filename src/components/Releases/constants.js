const RELEASES = {
  SALARY: {
    type: 'SALARY',
    label: 'Salário',
  },
  INCOME: {
    type: 'INCOME',
    label: 'Rendimentos',
  },
  OTHERS: {
    type: 'OTHERS',
    label: 'Outros',
  },
};

const TABLE_RELEASES_COLUMNS = ['Nome', 'Tipo', 'Data', 'Valor', 'Se Repete', 'Conta'];

const TABLE_RELEASES_ACTIONS = [
  {
    name: 'EDIT',
    event: () => alert('Editar Entrada'),
  },
  {
    name: 'DELETE',
    event: () => alert('Excluir Entrada'),
  },
];

const RELEASES_RECURRENCE = {
  MONTLHY: {
    value: 'MONTLHY',
    label: 'Mensal',
  },
  WITHOUT_RECURRENCE: {
    value: 'WITHOUT_RECURRENCE',
    label: '',
  },
};

export {
  RELEASES,
  TABLE_RELEASES_COLUMNS,
  RELEASES_RECURRENCE,
  TABLE_RELEASES_ACTIONS,
};
