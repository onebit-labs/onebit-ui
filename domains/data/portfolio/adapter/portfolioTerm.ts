import type { PortfolioTerm } from 'domains/data/onebit-graph/adapter/portfolioTerm'

export const getPortfolioTerm = (data: PortfolioTerm[]): PortfolioTerm[] => {
  if (data && data.length > 1) {
    const length = data.length - 1
    for (let index = 0; index < length; index++) {
      const portfolioTerm = data[index]
      const nextPortfolioTerm = data[index + 1]
      portfolioTerm.liquidityIndex = nextPortfolioTerm.previousLiquidityIndex
      portfolioTerm.depositors = nextPortfolioTerm.previousDepositors
    }
  }
  return data
}
