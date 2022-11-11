import type { ChainlinkService } from 'lib/protocol/typechain/chainlink'

export type Props = {
  chainlinkService: ChainlinkService
  data: Array<{
    symbol: string
    oracleChainlinkAddress: string
  }>
}
export const request = (props: Props) => {
  const { chainlinkService, data } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  data
    .filter((i) => i && i.oracleChainlinkAddress)
    .forEach(({ symbol, oracleChainlinkAddress }) => {
      promises.push(
        chainlinkService.getAnswer({ token: oracleChainlinkAddress }).then((value) => {
          returnValue[symbol] = value.toString()
        })
      )
    })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
