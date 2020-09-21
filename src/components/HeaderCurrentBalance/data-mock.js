const getCurrentBalances = async () => Promise.resolve([
  {
    id: '1',
    name: 'Itaú',
    currentBalance: 3298.06,
    balanceType: 'CURRENT'
  },
  {
    id: 2,
    name: 'NuConta',
    currentBalance: 0.05,
    balanceType: 'CURRENT'
  },
  {
    id: 3,
    name: 'Itaú',
    currentBalance: 40000.49,
    balanceType: 'SAVINGS'
  },
  {
    id: 4,
    name: 'Caixa',
    currentBalance: 0.00,
    balanceType: 'SAVINGS'
  },
  {
    id: 5,
    name: 'Easynvest',
    currentBalance: 4999.00,
    balanceType: 'INVESTMENT'
  },
])

export default {
  getCurrentBalances
}
