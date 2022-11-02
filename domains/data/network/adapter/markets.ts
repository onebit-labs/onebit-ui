import type { AddressData } from 'lib/protocol/market'

type MarketId = 'Onebit-USDT-1' | 'Onebit-USDT-2' | 'Onebit-USDT-3'

const getMarketInfo = (id: MarketId) => {
  switch (id) {
    case 'Onebit-USDT-1':
      return {
        portfolioName: 'Onebit主观1号',
        series: 'USDT主观',
        symbol: 'USDT',
        description: 'description 主观1号',
      }
    case 'Onebit-USDT-2':
      return {
        portfolioName: 'Onebit跟单1号',
        series: 'USDT跟单',
        symbol: 'USDT',
        description: 'description 跟单1号',
      }
    case 'Onebit-USDT-3':
      return {
        portfolioName: 'onebit套利1号',
        series: 'USDT跟单',
        symbol: 'USDT',
        description: 'description onebit套利1号',
      }
  }
}

export type ContractsAddress = {
  LendingPoolAddressesProvider: string
  LendingPool: string
  LendingPoolConfigurator: string
  OToken: string
  symbol: string
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
      } as ContractsAddress,
    }
  })
}
