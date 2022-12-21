import bsc from 'lib/protocol/generate/bsc.json'
import goerli from 'lib/protocol/generate/goerli.json'

import { ChainId } from '../chain/types'

export type AddressData = {
  chainId: ChainId
  oracleChainlinkAddress: Record<string, string>
} & typeof goerli

const list: Record<ChainId, AddressData> = {
  [ChainId.bsc]: {
    ...bsc,
    oracleChainlinkAddress: {
      WBTC: '0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf',
      USDT: '0xB97Ad0E74fa7d920791E90258A6E2085088b4320',
    },
  },
  [ChainId.goerli]: {
    ...goerli,
    oracleChainlinkAddress: {
      WBTC: '0xA39434A63A52E749F02807ae27335515BA4b07F7',
      USDT: '0x0d79df66BE487753B02D015Fb622DED7f0E9798d',
    },
  },
} as any

const getMarketsData = (chainId: ChainId): AddressData => {
  const generateInfo = list[chainId]
  if (!generateInfo) throw new Error(`[getMarketsData] error. chainId => ${chainId}`)

  return {
    chainId,
    ...generateInfo,
  }
}

const MARKETS: Record<number, AddressData> = {
  [ChainId.bsc]: getMarketsData(ChainId.bsc),
  [ChainId.goerli]: getMarketsData(ChainId.goerli),
}

export const defaultMarket = MARKETS[ChainId.bsc]
export const getAddress = (chainId: ChainId) => MARKETS[chainId] || defaultMarket
export const marktetIds = Object.keys(MARKETS[ChainId.goerli].markets)
