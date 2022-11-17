import type { PortfolioTerm } from 'domains/data/onebit-graph/adapter/portfolioTerm'
import type { Portfolio } from '..'
import { getCurrentAPY } from './currentAPY'

export const getPortfolioTerm = (portfolio: Portfolio, data: PortfolioTerm[]): PortfolioTerm[] => {
  if (!data || !data.length) return data
  if (data.length > 1) {
    const length = data.length - 1
    for (let index = 0; index < length; index++) {
      const portfolioTerm = data[index]
      const nextPortfolioTerm = data[index + 1]
      portfolioTerm.liquidityIndex = nextPortfolioTerm.previousLiquidityIndex
      portfolioTerm.depositors = nextPortfolioTerm.previousDepositors
      portfolioTerm.netValue = nextPortfolioTerm.previousNetValue
      portfolioTerm.assetsUnderManagement = nextPortfolioTerm.previousAssetsUnderManagement
      portfolioTerm.APY = getCurrentAPY(portfolioTerm)
    }
  }
  const currentTerm = data[data.length - 1]
  currentTerm.depositors = portfolio.depositors.toNumber()
  currentTerm.netValue = portfolio.netValue
  currentTerm.APY = portfolio.currentAPY
  currentTerm.assetsUnderManagement = portfolio.totalSupply

  return data
}
