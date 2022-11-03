import { getAddress, getBigNumber, getNumber } from 'app/utils/get'
import { getPortfolioLockTime } from 'domains/data/portfolio/adapter/lockTime'
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
  term: number
  depositors: number
  previousDepositors: number
  liquidityIndex: BN
  previousLiquidityIndex: BN
  value: BN
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
      ...getBigNumber(portfolioTerm, ['value'], 18),
      ...getBigNumber(portfolioTerm, ['previousLiquidityIndex'], 27),
      ...getBigNumber(portfolioTerm, ['managementFeeRate', 'performanceFeeRate'], 4),
      lockTime: getPortfolioLockTime(timestamps),
      liquidityIndex: toBN(0),
      depositors: 0,
    }

    return returnValue
  })

  return returnValue
}