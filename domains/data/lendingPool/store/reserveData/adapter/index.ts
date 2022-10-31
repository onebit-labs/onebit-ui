import type { LendingPoolService } from 'lib/protocol/typechain/onebit'
import type { ReserveDataSource } from './getReserveDataSource'
import { getReserveDataSource } from './getReserveDataSource'

export type Props = {
  lendingPoolService: LendingPoolService
  lendingPools: string[]
}
export const request = (props: Props) => {
  const { lendingPoolService, lendingPools } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, ReserveDataSource> = {}

  lendingPools.forEach((lendingPool) => {
    promises.push(
      lendingPoolService.getReserveData({ pool: lendingPool }).then((reserve) => {
        returnValue[lendingPool] = getReserveDataSource(reserve)
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
