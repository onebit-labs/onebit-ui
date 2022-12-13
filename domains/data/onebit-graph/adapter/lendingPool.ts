import { toBN } from 'lib/math'
import type { SliceState } from '../store/lendingPool/adapter'

export type Vault = {
  id: string
  term: number
  depositors: BN
  depositorList: string[]
}
export const getVault = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map(({ id, term, depositors }) => {
    return {
      id,
      term,
      depositors: toBN(depositors.length),
      depositorList: depositors,
    } as Vault
  })
  return returnValue
}
