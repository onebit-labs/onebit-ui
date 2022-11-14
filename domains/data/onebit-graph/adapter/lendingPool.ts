import { normalize, toBN } from 'lib/math'
import type { SliceState } from '../store/lendingPool/adapter'

export type LendingPool = {
  id: string
  term: number
  depositors: BN
  liquidityRate: BN
  depositorList: string[]
}
export const getLendingPool = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map(({ id, term, depositors, liquidityRate }) => {
    return {
      id,
      term,
      depositors: toBN(depositors.length),
      depositorList: depositors,
      liquidityRate: normalize(liquidityRate, 27),
    } as LendingPool
  })
  return returnValue
}
