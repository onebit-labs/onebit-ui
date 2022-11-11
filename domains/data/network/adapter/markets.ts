import type { AddressData } from 'lib/protocol/market'

export type MarketId =
  | 'Onebit-Lightning-Hunter-USDT'
  | 'Onebit-Smart-Trend-USDT'
  | 'Onebit-Smart-Trend-BTC'
  | 'Onebit-Smart-Trend-USDT-Demo'

export type MarketInfo = {
  portfolioName: string
  series: string
  symbol: string
  description: string
  estimatedAPY: string
}

const getMarketInfo = (id: MarketId): MarketInfo => {
  switch (id) {
    case 'Onebit-Lightning-Hunter-USDT':
      return {
        portfolioName: 'Onebit Lightning Hunter-USDT (Nov-22)',
        series: 'Onebit Lightning Hunter-USDT',
        symbol: 'USDT',
        estimatedAPY: '60.5% - 81.2%',
        description: 'description 主观1号',
      }
    case 'Onebit-Smart-Trend-USDT':
      return {
        portfolioName: 'Onebit Smart Trend-USDT (Nov-22)',
        series: 'Onebit Smart Trend-USDT',
        symbol: 'USDT',
        estimatedAPY: '50% - 150%',
        description: 'description 跟单1号',
      }
    case 'Onebit-Smart-Trend-BTC':
      return {
        portfolioName: 'Onebit Smart Trend-BTC (Nov-22)',
        series: 'Onebit Smart Trend-BTC',
        symbol: 'WBTC',
        estimatedAPY: '20% - 50%',
        description: 'description onebit套利1号',
      }
    case 'Onebit-Smart-Trend-USDT-Demo':
      return {
        portfolioName: 'Onebit Smart Trend-USDT (Nov-22) Demo',
        series: 'Onebit Smart Trend-USDT',
        symbol: 'USDT',
        estimatedAPY: '60.5% - 81.2%',
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
