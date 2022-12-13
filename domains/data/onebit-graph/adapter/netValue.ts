import { DAY, getUTCTime, HalfDay } from 'app/constant'
import { cloneDeep } from 'lodash'
import { getAddress, getBigNumber, getNumber } from 'app/utils/get'
import type { SliceState } from '../store/netValue/adapter'

export type NetValue = {
  id: string
  vault: string
  reserveNormalizedIncome: BN
  // previousNetValue: BN
  // newNetValue: BN
  previousLiquidityIndex: BN
  newLiquidityIndex: BN
  // currentLiquidityRate: BN
  createTimestamp: number
}
export const getNetValue = (sliceState: SliceState) => {
  if (!sliceState) return []
  const returnValue = sliceState.map((i) => {
    return {
      ...i,
      ...getAddress(i, ['vault']),
      ...getBigNumber(i, ['reserveNormalizedIncome', 'previousLiquidityIndex', 'newLiquidityIndex'], 27),
      ...getNumber(i, ['createTimestamp']),
    } as NetValue
  })
  return returnValue
}

export const getFixedNetValues = (netValues: NetValue[]) => {
  if (!netValues || !netValues.length) return []
  const source = cloneDeep(netValues)
  const previousLiquidityIndex = source[0].previousLiquidityIndex
  const startTime = getUTCTime(source[0].createTimestamp)
  const endTime = getUTCTime(new Date())
  const fixed = [] as NetValue[]
  let index = 0
  const addSource = (createTimestamp: number) => {
    const fixedSource = source[index]
    fixedSource.createTimestamp = createTimestamp
    return source[++index]
  }
  for (let time = startTime; time <= endTime; time += DAY) {
    if (source[index]) {
      let createTimestamp = 0
      do {
        createTimestamp = source[index].createTimestamp
      } while (createTimestamp - time < HalfDay && addSource(createTimestamp))
    }
    if (!source[index - 1]) break
    fixed.push({
      ...source[index - 1],
      createTimestamp: time,
    })
  }

  fixed.forEach((item, i) => {
    if (!i) {
      item.previousLiquidityIndex = previousLiquidityIndex
      return
    }
    item.previousLiquidityIndex = fixed[i - 1].newLiquidityIndex
  })

  return fixed
}
