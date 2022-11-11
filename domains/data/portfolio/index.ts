import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'

import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import { useERC20, useNetwork } from '..'

import { getPortfolioLockTime } from './adapter/lockTime'
import type { ReserveData } from './adapter/reserveData'
import type { PortfolioStatus } from './adapter/status'
import { getPortfolioStatus } from './adapter/status'
import type { UserReserveData } from './adapter/userReserveData'

import { useReserveData } from './application/reserveData'
import { useUserReserveData } from './application/userReserveData'
import { useOnebitAPIData } from './application/onebitAPI'
import { useOnebitGraphData } from './application/onebitGraph'
import type { ContractsAddress, MarketInfo } from '../network/adapter/markets'
import { getPortfolioTerm } from './adapter/portfolioTerm'
import type { LendingPool } from '../onebit-graph/adapter/lendingPool'
import type { PortfolioTerm } from '../onebit-graph/adapter/portfolioTerm'
import type { Transaction } from '../onebit-graph/adapter/transaction'
import { useWallet } from 'domains'

export type MarketReserve = Partial<ReserveData> &
  MarketInfo & {
    id: string
    address: ContractsAddress
  }
export type Portfolio = Partial<
  UserReserveData &
    LendingPool & {
      portfolioTerm: PortfolioTerm[]
    }
> &
  MarketReserve & {
    oracle?: BN
    totalSupply?: BN
    totalSupplyInUSD?: BN
    status: PortfolioStatus
    lockTime: number

    estimatedAPY: BN
    currentAPY: BN
    depositors: BN
    yourEquity: BN
    PNL: BN
    previousPNL: BN

    portfolioDaily: Record<'x' | 'y', number>[]
    seriesDaily: Record<'x' | 'y', number>[]
  }

export type UserPortfolio = {
  transactions: Transaction[]
}

const usePortfolioService = () => {
  const { reserveData } = useReserveData()
  const { markets } = useNetwork()
  const marketReserveData = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, info, address } = market
      const lendingPoolAddress = address.LendingPool
      const reserve = reserveData[lendingPoolAddress]
      return {
        ...info,
        ...reserve,
        id,
        address,
      } as MarketReserve
    })
    log('[portfolio] [marketReserveData]', returnValue)
    return returnValue
  }, [markets, reserveData])
  const { userReserveData } = useUserReserveData({ reserveData })
  const erc20Data = useERC20()
  const onebitGraphData = useOnebitGraphData()
  const { seriesDaily, portfolioDaily } = useOnebitAPIData()
  const { networkAccount } = useWallet()

  const portfolioData = useMemo(() => {
    const returnValue = marketReserveData.map((market) => {
      const { id, address, symbol, portfolioName } = market
      const lendingPoolAddress = address.LendingPool
      const oracle = toBN(safeGet(() => erc20Data.oracle[symbol]) || 0)
      const reserve = reserveData[lendingPoolAddress]
      const userReserve = userReserveData[lendingPoolAddress]
      const lendingPool = onebitGraphData.lendingPool.find((i) => i.id === lendingPoolAddress)
      const portfolioTerm = onebitGraphData.portfolioTerm.filter((i) => i.lendingPool === lendingPoolAddress)

      const totalSupply = toBN(safeGet(() => erc20Data.totalSupply[address.OToken]) || 0)

      return {
        ...market,
        ...lendingPool,
        ...userReserve,
        ...reserve,
        portfolioTerm: getPortfolioTerm(portfolioTerm),
        status: getPortfolioStatus(reserve),
        lockTime: getPortfolioLockTime(reserve),

        oracle,
        totalSupply,
        totalSupplyInUSD: totalSupply.multipliedBy(oracle),

        estimatedAPY: toBN(0),
        currentAPY: toBN(0),
        yourEquity: safeGet(() => userReserve.balanceOf),
        PNL: toBN(0),
        previousPNL: toBN(0),

        portfolioDaily: safeGet(() => portfolioDaily[portfolioName]) || [],
        seriesDaily: safeGet(() => seriesDaily[portfolioName]) || [],
        id,
      } as Portfolio
    })
    log('[portfolio] [portfolioData]', returnValue)
    return returnValue
  }, [
    erc20Data.oracle,
    erc20Data.totalSupply,
    marketReserveData,
    onebitGraphData.lendingPool,
    onebitGraphData.portfolioTerm,
    portfolioDaily,
    reserveData,
    seriesDaily,
    userReserveData,
  ])

  const portfolioUserData = useMemo(() => {
    if (!networkAccount) return { transactions: [], dashboard: {} } as undefined
    let totalEquityValue = toBN(0)
    const totalPNL = toBN(0)
    const APY = toBN(0)
    const portfolioUserData = portfolioData
      .filter((portfolio) => !safeGet(() => portfolio.yourEquity.isZero()))
      .map((portfolio) => {
        totalEquityValue = totalEquityValue.plus(portfolio.yourEquity)
        return portfolio
      })
    const dashboard = {
      totalEquityValue,
      totalPNL,
      totalPortfolioDeposited: portfolioUserData.length,
      APY,
      portfolioUserData,
    }
    const returnValue = {
      transactions: onebitGraphData.transaction,
      dashboard,
    }
    log('[portfolio] [portfolioUserData]', returnValue)
    return returnValue
  }, [networkAccount, onebitGraphData.transaction, portfolioData])

  return {
    portfolioData,
    portfolioUserData,
  }
}
const { Provider: PortfolioProvider, createUseContext } = createContext(usePortfolioService)
export const createPortfolioContext = createUseContext

export default PortfolioProvider
