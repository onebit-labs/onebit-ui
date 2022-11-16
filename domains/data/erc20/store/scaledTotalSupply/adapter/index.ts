import type { OTokenService } from 'lib/protocol/typechain/onebit'

export type Props = {
  oTokenService: OTokenService
  tokens: string[]
}
export const request = (props: Props) => {
  const { oTokenService, tokens } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  tokens
    .filter((i) => i)
    .forEach((token) => {
      promises.push(
        oTokenService.getScaledTotalSupply({ oTokenAddress: token }).then((value) => {
          returnValue[token] = value.toString()
        })
      )
    })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
