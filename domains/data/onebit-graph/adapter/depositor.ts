import { getAddress, getBigNumber, getNumber } from 'app/utils/get'
import type { SliceState } from '../store/depositor/adapter'

export type Depositor = {
  id: string
  account: string
  lendingPool: string
  balanceOf: BN
  createTimestamp: number
  lastUpdateTimestamp: number
}
export const getDepositor = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map((i) => {
    return {
      ...i,
      ...getBigNumber(i, ['balanceOf'], 18),
      ...getAddress(i, ['lendingPool', 'account']),
      ...getNumber(i, ['createTimestamp', 'lastUpdateTimestamp']),
    } as Depositor
  })
  return returnValue
}
