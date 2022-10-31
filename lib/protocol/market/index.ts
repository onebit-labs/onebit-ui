import goerli from 'lib/protocol/generate/goerli.json'

import { ChainId } from '../chain/types'

export type MarketData = {
  chainId: ChainId
} & typeof goerli

const list: Record<ChainId, typeof goerli> = {
  [ChainId.goerli]: {
    ...goerli,
  },
} as any

const getMarketsData = (chainId: ChainId): MarketData => {
  const generateInfo = list[chainId]
  if (!generateInfo) throw new Error(`[getMarketsData] error. chainId => ${chainId}`)

  return {
    chainId,
    ...generateInfo,
  }
}

export const MARKETS: Record<number, MarketData> = {
  // [ChainId.ethereum]: getMarketsData(ChainId.ethereum),
  [ChainId.goerli]: getMarketsData(ChainId.goerli),
}
export const defaultMarket = MARKETS[ChainId.goerli]
export const getMarket = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
