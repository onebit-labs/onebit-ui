import type { NetworkConfig } from './types'
import { ChainId } from '../chain/types'

export const infuraId = 'dea011a2bebb451ba3602b02994145c1'

export const networks: Record<ChainId, NetworkConfig> = {
  [ChainId.goerli]: {
    name: 'Goerli',
    fullName: 'Goerli Testnet',
    symbol: 'ETH',
    publicJsonRPCUrl: [`https://goerli.infura.io/v3/${infuraId}`],
  },
  [ChainId.ethereum]: {
    name: 'Ethereum',
    fullName: 'Ethereum',
    symbol: 'ETH',
    publicJsonRPCUrl: [`https://mainnet.infura.io/v3/${infuraId}`],
  },
}

export function getNetwork(chainId: ChainId): NetworkConfig {
  const config = networks[chainId]
  return config || null
}
