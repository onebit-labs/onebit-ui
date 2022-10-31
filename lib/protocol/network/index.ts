import type { NetworkConfig } from './types'
import { ChainId } from '../chain/types'

export const infuraId = '1fe83aa589cd4ae3adfcbb2d7d411d4a'

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
