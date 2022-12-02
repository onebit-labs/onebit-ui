import type { Chain } from 'lib/openapi'

export type NetworkConfig = {
  chainName: Chain
  name: string
  fullName: string
  symbol: string
  publicJsonRPCUrl: string | string[]
}
