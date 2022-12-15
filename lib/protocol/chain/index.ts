import { ChainId } from './types'

export const ChainIdToNetwork: Record<ChainId, string> = {
  // [ChainId.ethereum]: 'ethereum',
  [ChainId.bsc]: 'bsc',
  [ChainId.goerli]: 'goerli',
}
