import type { ReserveDataSource } from 'domains/data/lendingPool/store/reserveData/adapter/getReserveDataSource'
import { getBigNumber, getNumber } from 'app/utils/get'
import { normalize } from 'lib/math'

export type ReserveData = {
  liquidityIndex: BN
  currentLiquidityRate: BN
  previousLiquidityIndex: BN
  purchaseUpperLimit: BN
  softUpperLimit: BN
  normalizedIncome: BN

  lastUpdateTimestamp: number
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  redemptionBeginTimestamp: number

  managementFeeRate: BN
  performanceFeeRate: BN

  oTokenAddress: string
  fundAddress: string
}

export const getReserveData = (
  reserveDataSource: Record<string, ReserveDataSource>,
  reserveNormalizedIncomeSource: Record<string, BN>
) => {
  const returnValue: Record<string, ReserveData> = {}
  Object.keys(reserveDataSource || {}).forEach((key) => {
    const reserveData = reserveDataSource[key]
    returnValue[key] = {
      ...reserveData,
      ...getBigNumber(reserveDataSource[key], ['purchaseUpperLimit', 'softUpperLimit'], 18),
      ...getBigNumber(reserveDataSource[key], ['liquidityIndex', 'currentLiquidityRate', 'previousLiquidityIndex'], 27),
      ...getBigNumber(reserveDataSource[key], ['managementFeeRate', 'performanceFeeRate'], 4),
      ...getNumber(reserveDataSource[key], [
        'lastUpdateTimestamp',
        'purchaseBeginTimestamp',
        'purchaseEndTimestamp',
        'redemptionBeginTimestamp',
      ]),
      normalizedIncome: normalize(reserveNormalizedIncomeSource[key], 27),
    }
  })

  return returnValue
}
