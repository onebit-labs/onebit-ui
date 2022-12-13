import { getAddress, getNumber } from 'app/utils/get'
import type { SliceState } from '../store/depositor/adapter'

export type Depositor = {
  id: string
  account: string
  vault: string
  createTimestamp: number
  lastUpdateTimestamp: number
}
export const getDepositor = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map((i) => {
    return {
      ...i,
      ...getAddress(i, ['vault', 'account', 'oTokenAddress']),
      ...getNumber(i, ['createTimestamp', 'lastUpdateTimestamp']),
    } as Depositor
  })
  return returnValue
}
