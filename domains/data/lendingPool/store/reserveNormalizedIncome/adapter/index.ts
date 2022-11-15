import type { LendingPoolService } from 'lib/protocol/typechain/onebit'
import { getReserveNormalizedIncomeSource } from './getReserveNormalizedIncomeSource'

export type Props = {
  lendingPoolService: LendingPoolService
  lendingPools: string[]
}
export const request = (props: Props) => {
  const { lendingPoolService, lendingPools } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  lendingPools.forEach((lendingPool) => {
    promises.push(
      lendingPoolService.getReserveNormalizedIncome({ pool: lendingPool }).then((reserve) => {
        returnValue[lendingPool] = getReserveNormalizedIncomeSource(reserve)
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
