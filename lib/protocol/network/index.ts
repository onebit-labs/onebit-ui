import type { NetworkConfig } from './types'
import { ChainId } from '../chain/types'
import { Chain } from 'lib/openapi'

export const infuraId = 'dea011a2bebb451ba3602b02994145c1'

export const networks: Record<ChainId, NetworkConfig> = {
  [ChainId.bsc]: {
    chainName: Chain.BSC,
    name: 'BSC',
    fullName: 'Binance Smart Chain',
    symbol: 'BNB',
    publicJsonRPCUrl: [
      'https://bsc-dataseed1.binance.org',
      'https://bsc-dataseed2.ninicoin.io',
      'https://rpc.ankr.com/bsc',
    ],
  },
  [ChainId.goerli]: {
    chainName: Chain.GOERLI,
    name: 'Goerli',
    fullName: 'Goerli',
    symbol: 'ETH',
    publicJsonRPCUrl: [`https://goerli.infura.io/v3/${infuraId}`],
  },
  // [ChainId.ethereum]: {
  //   name: 'Ethereum',
  //   fullName: 'Ethereum',
  //   symbol: 'ETH',
  //   publicJsonRPCUrl: [`https://mainnet.infura.io/v3/${infuraId}`],
  // },
  // [ChainId.bsc_testnet]: {
  //   name: 'BSC Testnet',
  //   fullName: 'Binance Smart Chain Testnet',
  //   symbol: 'tBNB',
  //   publicJsonRPCUrl: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
  // },
}

export function getNetwork(chainId: ChainId): NetworkConfig {
  const config = networks[chainId]
  return config || null
}
