import type { ERC20Service } from 'lib/protocol/typechain/erc20'

export type Props = {
  erc20Service: ERC20Service
  tokens: string[]
}
export const request = (props: Props) => {
  const { erc20Service, tokens } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  tokens.forEach((token) => {
    promises.push(
      erc20Service.totalSupply(token).then((value) => {
        returnValue[token] = value.toString()
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
