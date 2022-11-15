import { getAddress, getNumber, getBigNumber } from 'app/utils/get'
import type { SliceState } from '../store/netValue/adapter'

export type NetValue = {
  id: string
  lendingPool: string
  reserveNormalizedIncome: BN
  // previousNetValue: BN
  // newNetValue: BN
  // previousLiquidityIndex: BN
  // newLiquidityIndex: BN
  // currentLiquidityRate: BN
  createTimestamp: number
}
export const getNetValue = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map((i) => {
    return {
      ...i,
      ...getAddress(i, ['lendingPool']),
      ...getBigNumber(i, ['reserveNormalizedIncome'], 27),
      ...getNumber(i, ['createTimestamp']),
    } as NetValue
  })
  return returnValue
}
