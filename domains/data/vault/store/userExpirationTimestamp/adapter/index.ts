import { getNumber } from 'app/utils/get'
import type { VaultService } from 'lib/protocol/typechain/onebit'

export type Props = {
  vaultService: VaultService
  account: string
  vaults: string[]
}
export const request = (props: Props) => {
  const { vaultService, vaults, account } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, number> = {}
  vaults.forEach((vault) => {
    promises.push(
      vaultService.getUserExpirationTimestamp({ vault, user: account }).then((userExpirationTimestamp) => {
        const time = getNumber({ userExpirationTimestamp }, ['userExpirationTimestamp']).userExpirationTimestamp
        returnValue[vault] = time
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
