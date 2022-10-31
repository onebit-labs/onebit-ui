import type { ReserveDataSource } from 'domains/data/lendingPool/store/reserveData/adapter/getReserveDataSource'
import { getBigNumber, getTimestamp } from 'app/utils/get'

export type ReserveData = {
  liquidityIndex: BN
  currentLiquidityRate: BN
  previousLiquidityIndex: BN
  purchaseUpperLimit: BN

  lastUpdateTimestamp: number
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  redemptionBeginTimestamp: number

  managementFeeRate: BN
  performanceFeeRate: BN

  oTokenAddress: string
  fundAddress: string
}

export const getReserveData = (reserveDataSource: Record<string, ReserveDataSource>) => {
  const returnValue: Record<string, ReserveData> = {}
  Object.keys(reserveDataSource || {}).forEach((key) => {
    const reserveData = reserveDataSource[key]
    returnValue[key] = {
      ...reserveData,
      ...getBigNumber(reserveDataSource[key], ['purchaseUpperLimit'], 18),
      ...getBigNumber(reserveDataSource[key], ['liquidityIndex', 'currentLiquidityRate', 'previousLiquidityIndex'], 27),
      ...getBigNumber(reserveDataSource[key], ['managementFeeRate', 'performanceFeeRate'], 4),
      ...getTimestamp(reserveDataSource[key], [
        'lastUpdateTimestamp',
        'purchaseBeginTimestamp',
        'purchaseEndTimestamp',
        'redemptionBeginTimestamp',
      ]),
    }
  })

  return returnValue
}
