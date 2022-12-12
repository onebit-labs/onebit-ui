import { safeGet } from 'app/utils/get'
import type { PortfolioTerm } from 'domains/data/onebit-graph/adapter/portfolioTerm'
import { toBN } from 'lib/math'
import type { Portfolio } from '..'
import { getAPYByNetValue } from './currentAPY'

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
  currentTerm.assetsUnderManagement = portfolio.totalSupplyWithAPI
  currentTerm.totalSupply = portfolio.totalSupply
  currentTerm.scaledTotalSupply = portfolio.scaledTotalSupply
  currentTerm.previousLiquidityIndex = portfolio.previousLiquidityIndex
  return data.map((portfolioTerm) => {
    const {
      totalSupply,
      scaledTotalSupply: scaledAssetsUnderManagement,
      previousLiquidityIndex,
      managementFeeRate,
      performanceFeeRate,
      lockDays,
      netValue,
    } = portfolioTerm
    const openingAssets = scaledAssetsUnderManagement.multipliedBy(previousLiquidityIndex)
    portfolioTerm.openingAssets = openingAssets

    const managementFeeTimeValue = managementFeeRate.multipliedBy(lockDays).div(365)
    const $managementFeeTimeValue = toBN(1).minus(managementFeeTimeValue)

    const assetsUnderManagementDivOpeningAssets = totalSupply.div(openingAssets)
    if (assetsUnderManagementDivOpeningAssets.gt($managementFeeTimeValue)) {
      portfolioTerm.netValueBeforeDeduction = assetsUnderManagementDivOpeningAssets
        .minus(performanceFeeRate)
        .div($managementFeeTimeValue.minus(performanceFeeRate))
    } else {
      portfolioTerm.netValueBeforeDeduction = assetsUnderManagementDivOpeningAssets.plus(managementFeeTimeValue)
    }
    portfolioTerm.totalFees = openingAssets.multipliedBy(portfolioTerm.netValueBeforeDeduction.minus(netValue))
    portfolioTerm.APY = getAPYByNetValue(portfolioTerm.netValueBeforeDeduction, lockDays)

    return portfolioTerm
  })
}
