import type { ChainlinkService } from 'lib/protocol/typechain/chainlink'

import { getChainlinkAddress } from './chainlinkAddress'

export type Props = {
  chainlinkService: ChainlinkService
  symbols: string[]
}
export const request = (props: Props) => {
  const { chainlinkService, symbols } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  symbols.filter(i => i).forEach((symbol) => {
    const token = getChainlinkAddress(symbol)
    promises.push(
      chainlinkService.getAnswer({ token }).then((value) => {
        returnValue[symbol] = value.toString()
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
