import { getNumber } from 'app/utils/get'
import type { VaultService } from 'lib/protocol/typechain/onebit'

export type Props = {
  lendingPoolService: VaultService
  account: string
  lendingPools: string[]
}
export const request = (props: Props) => {
  const { lendingPoolService, lendingPools, account } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, number> = {}
  lendingPools.forEach((lendingPool) => {
    promises.push(
      lendingPoolService
        .getUserExpirationTimestamp({ pool: lendingPool, user: account })
        .then((userExpirationTimestamp) => {
          const time = getNumber({ userExpirationTimestamp }, ['userExpirationTimestamp']).userExpirationTimestamp
          returnValue[lendingPool] = time
        })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
