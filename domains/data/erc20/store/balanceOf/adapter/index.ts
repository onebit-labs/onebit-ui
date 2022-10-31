import type { ERC20Service } from 'lib/protocol/typechain/erc20'

export type Props = {
  erc20Service: ERC20Service
  user: string
  tokens: string[]
}
export const request = (props: Props) => {
  const { erc20Service, user, tokens } = props
  const promises: Array<Promise<void>> = []
  const returnValue: Record<string, string> = {}

  tokens.forEach((token) => {
    promises.push(
      erc20Service.balanceOf(token, user).then((value) => {
        returnValue[token] = value.toString()
      })
    )
  })

  return Promise.all(promises).then(() => returnValue)
}
export type SliceState = Awaited<ReturnType<typeof request>>
