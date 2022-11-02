import { getAddress, getNumber } from 'app/utils/get'
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
  return sliceState.map(i => {
    return {
      ...i,
      ...getAddress(i, ['lendingPool', 'account']),
      ...getNumber(i, ['createTimestamp', 'lastUpdateTimestamp'])
    } as Depositor
  })
}
