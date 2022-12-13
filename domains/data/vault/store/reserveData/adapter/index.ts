import type { VaultService } from 'lib/protocol/typechain/onebit'
import type { ReserveDataSource } from './getReserveDataSource'
import { getReserveDataSource } from './getReserveDataSource'

export type Props = {
  vaultService: VaultService
  vaults: string[]
}
export const request = (props: Props) => {
  const { vaultService, vaults } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, ReserveDataSource> = {}

  vaults.forEach((vault) => {
    promises.push(
      vaultService.getReserveData({ pool: vault }).then((reserve) => {
        returnValue[vault] = getReserveDataSource(reserve)
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
