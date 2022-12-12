import { getAddress, getBigNumber, getNumber } from 'app/utils/get'
import { getPortfolioLockDays, getPortfolioLockTime } from 'domains/data/portfolio/adapter/lockTime'
import { toBN } from 'lib/math'
import type { SliceState } from '../store/portfolioTerm/adapter'

export type PortfolioTerm = {
  id: string
  lendingPool: string
  createTimestamp: number
  managementFeeRate: BN
  performanceFeeRate: BN
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  lockTime: number
  lockDays: number
  term: number
  depositors: number
  previousDepositors: number
  previousLiquidityIndex: BN
  previousNetValue: BN
  previousAssetsUnderManagement: BN
  previousScaledAssetsUnderManagement: BN
  APY: BN
  netValue: BN
  netValueBeforeDeduction: BN
  assetsUnderManagement: BN
  totalSupply: BN
  scaledTotalSupply: BN
  openingAssets: BN
  totalFees: BN
}
export const getPortfolioTerm = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map((portfolioTerm) => {
    const timestamps = getNumber(portfolioTerm, [
      'redemptionBeginTimestamp',
      'purchaseBeginTimestamp',
      'purchaseEndTimestamp',
      'createTimestamp',
    ])
    const returnValue: PortfolioTerm = {
      ...portfolioTerm,
      ...timestamps,
      ...getAddress(portfolioTerm, ['lendingPool']),
      ...getBigNumber(portfolioTerm, ['previousNetValue'], 0),
      ...getBigNumber(portfolioTerm, ['previousAssetsUnderManagement', 'previousScaledAssetsUnderManagement'], 18),
      ...getBigNumber(portfolioTerm, ['previousLiquidityIndex'], 27),
      ...getBigNumber(portfolioTerm, ['managementFeeRate', 'performanceFeeRate'], 4),
      lockTime: getPortfolioLockTime(timestamps),
      lockDays: getPortfolioLockDays(timestamps),
      depositors: 0,
      APY: toBN(0),
      netValue: toBN(0),
      netValueBeforeDeduction: toBN(0),
      assetsUnderManagement: toBN(0),
      totalSupply: toBN(0),
      scaledTotalSupply: toBN(0),
      openingAssets: toBN(0),
      totalFees: toBN(0),
    }

    return returnValue
  })

  return returnValue
}
