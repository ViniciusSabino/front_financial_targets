import { CurrentBalanceTypes } from '../../../utils/enums/balances';

const CURRENT_BALANCE_TYPES = CurrentBalanceTypes;

const CURRENT_BALANCE = {
  TITLE_COMPLEMENT: {
    ACCOUNT: '- Conta Principal',
    INVESTMENTS: '- Principal',
  },
  POSITION: 'left',
  MAIN_TITLE: 'Saldo Atual',
};

const TOTAL_BALANCE = {
  POSITION: 'right',
  MAIN_TITLE: 'Saldo Total',
  BALANCE_OPTIONS: {
    GENERAL: 'Geral',
    INVESTMENTS: 'Investimentos',
  },
  TYPES: {
    GENERAL: 'GENERAL',
    INVESTMENTS: 'INVESTMENTS',
  },
};

const TYPES_OF_BALANCES = {
  CURRENT: 'CURRENT_BALANCE',
  TOTAL: 'TOTAL_BALANCE',
};

// summaryClosing
const TYPES_OF_CLOSINGS = {
  ESTIMATED: {
    name: 'ESTIMATED',
    templateDescription: 'Fechamento estimado para o mês de {{month}}',
  },
  CURRENT: {
    name: 'CURRENT',
    templateDescription: 'Fechamento atual para o mês de {{month}}',
  },
};

export {
  CURRENT_BALANCE,
  TOTAL_BALANCE,
  TYPES_OF_BALANCES,
  TYPES_OF_CLOSINGS,
};
