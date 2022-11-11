import type { DataTypes } from 'lib/protocol/typechain/onebit/typechain/LendingPool'
import { getAddress, getString } from 'app/utils/get'

export type ReserveDataSource = {
  liquidityIndex: string
  currentLiquidityRate: string
  previousLiquidityIndex: string
  purchaseUpperLimit: string
  softUpperLimit: string

  lastUpdateTimestamp: number
  purchaseBeginTimestamp: number
  purchaseEndTimestamp: number
  redemptionBeginTimestamp: number
  managementFeeRate: number
  performanceFeeRate: number

  oTokenAddress: string
  fundAddress: string
}

export const getReserveDataSource = (reserve: DataTypes.ReserveDataStructOutput): ReserveDataSource => {
  const {
    lastUpdateTimestamp,
    purchaseBeginTimestamp,
    purchaseEndTimestamp,
    redemptionBeginTimestamp,
    managementFeeRate,
    performanceFeeRate,
  } = reserve

  return {
    lastUpdateTimestamp,
    purchaseBeginTimestamp,
    purchaseEndTimestamp,
    redemptionBeginTimestamp,
    managementFeeRate,
    performanceFeeRate,
    ...getAddress(reserve, ['oTokenAddress', 'fundAddress']),
    ...getString(reserve, [
      'liquidityIndex',
      'currentLiquidityRate',
      'previousLiquidityIndex',
      'purchaseUpperLimit',
      'softUpperLimit',
    ]),
  }
}
