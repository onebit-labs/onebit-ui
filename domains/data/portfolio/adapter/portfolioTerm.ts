import { safeGet } from 'app/utils/get'
import type { PortfolioTerm } from 'domains/data/onebit-graph/adapter/portfolioTerm'
import type { Portfolio } from '..'
import { getAPYByNetValue } from './currentAPY'
import { getNetValueByCalculate } from './netValue'

export const getPortfolioTerm = (portfolio: Portfolio, data: PortfolioTerm[]): PortfolioTerm[] => {
  if (!data || !data.length) return data
  if (data.length > 1) {
    const length = data.length - 1
    for (let index = 0; index < length; index++) {
      const portfolioTerm = data[index]
      const nextPortfolioTerm = data[index + 1]
      portfolioTerm.depositors = nextPortfolioTerm.previousDepositors
      portfolioTerm.netValue = nextPortfolioTerm.previousNetValue
      portfolioTerm.assetsUnderManagement = nextPortfolioTerm.previousAssetsUnderManagement
      portfolioTerm.scaledTotalSupply = nextPortfolioTerm.previousScaledAssetsUnderManagement
    }
  }
  const currentTerm = data[data.length - 1]
  currentTerm.depositors = safeGet(() => portfolio.depositors.toNumber()) || 0
  currentTerm.netValue = portfolio.netValue
  currentTerm.assetsUnderManagement = portfolio.totalSupplyByAPI
  currentTerm.totalSupply = portfolio.totalSupply
  currentTerm.scaledTotalSupply = portfolio.scaledTotalSupply
  currentTerm.previousLiquidityIndex = portfolio.previousLiquidityIndex
  return data.map((portfolioTerm) => {
    const { scaledTotalSupply: scaledAssetsUnderManagement, previousLiquidityIndex, lockedTimeInSeconds, netValue } = portfolioTerm
    const initialDeposit = scaledAssetsUnderManagement.multipliedBy(previousLiquidityIndex)
    portfolioTerm.openingAssets = initialDeposit
    portfolioTerm.netValueByCalculate = getNetValueByCalculate(portfolioTerm)
    portfolioTerm.totalFees = initialDeposit.multipliedBy(portfolioTerm.netValueByCalculate.minus(netValue))
    portfolioTerm.APY = getAPYByNetValue(portfolioTerm.netValueByCalculate, lockedTimeInSeconds)

    return portfolioTerm
  })
}
