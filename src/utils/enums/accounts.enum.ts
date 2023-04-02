enum CurrentBalanceTypes {
  ACCOUNT = 'ACCOUNT',
  INVESTMENT = 'INVESTMENT',
}

enum CurrentBalancesResponseKeys {
  accounts = 'accounts',
  investments = 'investments',
}

enum TotalBalancesTypes {
  GENERAL = 'GENERAL',
  INVESTMENTS = 'INVESTMENTS',
}

enum BalanceTypes {
  TOTAL = 'TOTAL',
  CURRENT = 'CURRENT',
}

enum TypesOfClosings {
  ESTIMATED = 'ESTIMATED',
  CURRENT = 'CURRENT',
}

export {
  CurrentBalanceTypes, CurrentBalancesResponseKeys, TotalBalancesTypes, BalanceTypes, TypesOfClosings,
};
