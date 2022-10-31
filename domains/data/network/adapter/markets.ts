import type { AddressData } from 'lib/protocol/market'

type MarketId = 'Onebit-USDT-1' | 'Onebit-USDT-2'

const getMarketInfo = (id: MarketId) => {
  switch (id) {
    case 'Onebit-USDT-1':
      return {
        portfolioName: 'Onebit主观1号',
        symbol: 'USDT',
        description: 'description 主观1号',
      }
    case 'Onebit-USDT-2':
      return {
        portfolioName: 'Onebit跟单1号',
        symbol: 'USDT',
        description: 'description 跟单1号',
      }
  }
}

export const getMarkets = (address: AddressData) => {
  return Object.keys(address.markets).map((key) => {
    const id: MarketId = key as any
    const info = getMarketInfo(id)
    return {
      id,
      info,
      address: {
        ...address.markets[id],
        symbol: address[info.symbol as 'USDT'],
      },
    }
  })
}
