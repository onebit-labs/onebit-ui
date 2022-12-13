import type { VaultService } from 'lib/protocol/typechain/onebit'
import { getReserveNormalizedIncomeSource } from './getReserveNormalizedIncomeSource'

export type Props = {
  vaultService: VaultService
  vaults: string[]
}
export const request = (props: Props) => {
  const { vaultService, vaults } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  vaults.forEach((vault) => {
    promises.push(
      vaultService.getReserveNormalizedIncome({ vault }).then((reserve) => {
        returnValue[vault] = getReserveNormalizedIncomeSource(reserve)
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
