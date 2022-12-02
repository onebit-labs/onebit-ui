import type { AddressData } from 'lib/protocol/market'

export type MarketId =
  | 'Onebit-Lightning-Hunter-USDT'
  | 'Onebit-Smart-Trend-USDT'
  | 'Onebit-Smart-Trend-BTC'
  | 'Onebit-Smart-Trend-USDT-Demo'
  | 'Onebit-Smart-Trend-USDT-Whitelist-Test'

export type MarketInfo = {
  portfolioName: string
  portfolioAPIName: string
  series: string
  symbol: string
  estimatedAPY: string
  useWhitelist?: boolean
}

const getMarketInfo = (id: MarketId): MarketInfo => {
  switch (id) {
    case 'Onebit-Lightning-Hunter-USDT':
      return {
        portfolioAPIName: 'Onebit Lightning Hunter-USDT (Nov-22)',
        portfolioName: 'Onebit Lightning Hunter-USDT',
        series: 'Onebit Lightning Hunter-USDT',
        symbol: 'USDT',
        estimatedAPY: '60.5% - 81.2%',
      }
    case 'Onebit-Smart-Trend-USDT':
      return {
        portfolioAPIName: 'Onebit Smart Trend-USDT (Nov-22)',
        portfolioName: 'Onebit Smart Trend-USDT',
        series: 'Onebit Smart Trend-USDT',
        symbol: 'USDT',
        estimatedAPY: '50% - 150%',
      }
    case 'Onebit-Smart-Trend-BTC':
      return {
        portfolioAPIName: 'Onebit Smart Trend-BTC (Nov-22)',
        portfolioName: 'Onebit Smart Trend-BTC',
        series: 'Onebit Smart Trend-BTC',
        symbol: 'WBTC',
        estimatedAPY: '20% - 50%',
      }
    case 'Onebit-Smart-Trend-USDT-Demo':
      return {
        portfolioAPIName: 'Onebit Lightning Hunter-USDT (Nov-22)',
        portfolioName: 'Onebit Smart Trend-USDT Demo',
        series: 'Onebit Smart Trend-USDT',
        symbol: 'USDT',
        estimatedAPY: '60.5% - 81.2%',
      }
    case 'Onebit-Smart-Trend-USDT-Whitelist-Test':
      return {
        portfolioAPIName: 'Onebit Lightning Hunter-USDT (Nov-22)',
        portfolioName: 'Onebit Smart Trend-USDT Whitelist',
        series: 'Onebit Smart Trend-USDT',
        symbol: 'USDT',
        estimatedAPY: '60.5% - 81.2%',
        useWhitelist: true,
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
