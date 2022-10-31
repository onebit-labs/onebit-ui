import duotone from 'icons/duotone'
import Explore from 'icons/Explore'

export const navigations = [
  { type: 'label', label: 'menu' },
  { name: 'explorePortfolios', path: '/', icon: Explore },
  { name: 'dashboard', path: '/dashboard', icon: duotone.Dashboard, needAccount: true },
  { name: 'transactionHistory', path: '/transaction-history', icon: duotone.ElementHub, needAccount: true },
]
