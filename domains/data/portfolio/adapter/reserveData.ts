import type { ReserveDataSource } from 'domains/data/vault/store/reserveData/adapter/getReserveDataSource'
import { getBigNumber, getNumber, safeGet } from 'app/utils/get'
import { normalize, toBN } from 'lib/math'
import type { BNValue } from 'lib/math/types'

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
  reserveNormalizedIncomeSource: Record<string, BNValue>
) => {
  const returnValue: Record<string, ReserveData> = {}
  Object.keys(reserveDataSource || {}).forEach((key) => {
    const reserveData = reserveDataSource[key]
    returnValue[key] = {
      ...reserveData,
      ...getBigNumber(reserveDataSource[key], ['purchaseUpperLimit', 'softUpperLimit'], 18),
      ...getBigNumber(reserveDataSource[key], ['liquidityIndex', 'previousLiquidityIndex'], 27),
      ...getBigNumber(reserveDataSource[key], ['currentLiquidityRate'], 0),
      ...getBigNumber(reserveDataSource[key], ['managementFeeRate', 'performanceFeeRate'], 4),
      ...getNumber(reserveDataSource[key], [
        'lastUpdateTimestamp',
        'purchaseBeginTimestamp',
        'purchaseEndTimestamp',
        'redemptionBeginTimestamp',
      ]),
      normalizedIncome: safeGet(() => normalize(reserveNormalizedIncomeSource[key], 27)) || toBN(0),
    }
  })

  return returnValue
}
