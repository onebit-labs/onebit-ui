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
import type { NetValue } from '../onebit-graph/adapter/netValue'
import { getFixedNetValues } from '../onebit-graph/adapter/netValue'
import type { Transaction } from '../onebit-graph/adapter/transaction'
import { useWallet } from 'domains'
import { getCurrentAPY } from './adapter/currentAPY'

export type MarketReserve = Partial<ReserveData> &
  MarketInfo & {
    id: string
    address: ContractsAddress
  }
export type Portfolio = Partial<
  UserReserveData &
    LendingPool & {
      portfolioTerm: PortfolioTerm[]
      netValues: NetValue[]
    }
> &
  MarketReserve & {
    oracle?: BN
    totalSupply?: BN
    totalSupplyInUSD?: BN
    scaledTotalSupply?: BN
    scaledTotalSupplyInUSD?: BN
    status: PortfolioStatus
    lockTime: number

    currentAPY: BN
    depositors: BN
    yourEquity: BN
    yourEquityInUSD: BN
    PNL: BN
    PNLRate: BN
    PNLInUSD: BN
    netValue: BN

    portfolioDaily: Record<'x' | 'y', string>[]
    seriesDaily: Record<'x' | 'y', string>[]
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
  const { userReserveData } = useUserReserveData({ marketReserveData })
  const erc20Data = useERC20()
  const onebitGraphData = useOnebitGraphData()
  const { seriesDaily, portfolioDaily } = useOnebitAPIData()
  const { networkAccount } = useWallet()

  const portfolioData = useMemo(() => {
    const returnValue = marketReserveData.map((market) => {
      const { id, address, symbol, portfolioAPIName, series } = market
      const lendingPoolAddress = address.LendingPool
      const oracle = toBN(safeGet(() => erc20Data.oracle[symbol]) || 0)
      const reserve = reserveData[lendingPoolAddress]
      const userReserve = userReserveData[lendingPoolAddress]
      const lendingPool = onebitGraphData.lendingPool.find((i) => i.id === lendingPoolAddress)
      const portfolioTerm = onebitGraphData.portfolioTerm.filter((i) => i.lendingPool === lendingPoolAddress)
      const netValues = getFixedNetValues(onebitGraphData.netValue.filter((i) => i.lendingPool === lendingPoolAddress))

      const totalSupply = toBN(safeGet(() => erc20Data.totalSupply[address.OToken]) || 0)
      const scaledTotalSupply = toBN(safeGet(() => erc20Data.scaledTotalSupply[address.OToken]) || 0)
      const status = getPortfolioStatus(reserve)
      let currentAPY = toBN(0)

      if (status != 'open') {
        currentAPY = getCurrentAPY(reserve)
      }

      const yourEquity = safeGet(() => userReserve.balanceOf) || toBN(0)
      const netValue = safeGet(() => reserve.normalizedIncome) || toBN(0)
      const PNLRate = safeGet(() => netValue.minus(reserve.previousLiquidityIndex)) || toBN(0)
      let PNL = toBN(0)
      if (safeGet(() => !userReserve.scaledBalanceOf.isZero())) {
        PNL = userReserve.scaledBalanceOf.multipliedBy(PNLRate)
      }
      const yourEquityInUSD = yourEquity.multipliedBy(oracle)
      const PNLInUSD = PNL.multipliedBy(oracle)

      const returnValue: Portfolio = {
        ...market,
        ...lendingPool,
        ...userReserve,
        ...reserve,
        portfolioTerm: [],
        status,
        lockTime: getPortfolioLockTime(reserve),

        oracle,
        totalSupply,
        totalSupplyInUSD: totalSupply.multipliedBy(oracle),
        scaledTotalSupply,
        scaledTotalSupplyInUSD: scaledTotalSupply.multipliedBy(oracle),

        currentAPY,
        yourEquity,
        yourEquityInUSD,
        netValue,
        netValues,
        PNL,
        PNLRate,
        PNLInUSD,

        portfolioDaily: safeGet(() => portfolioDaily[portfolioAPIName]) || ([] as undefined),
        seriesDaily: safeGet(() => seriesDaily[series]) || ([] as undefined),
        id,
      }

      returnValue.portfolioTerm = getPortfolioTerm(returnValue, portfolioTerm)

      return returnValue
    })
    log('[portfolio] [portfolioData]', returnValue)
    return returnValue
  }, [
    erc20Data.oracle,
    erc20Data.scaledTotalSupply,
    erc20Data.totalSupply,
    marketReserveData,
    onebitGraphData.lendingPool,
    onebitGraphData.netValue,
    onebitGraphData.portfolioTerm,
    portfolioDaily,
    reserveData,
    seriesDaily,
    userReserveData,
  ])

  const portfolioUserData = useMemo(() => {
    if (!networkAccount) return { transactions: [], dashboard: {} } as undefined
    let totalEquityValue = toBN(0)
    let totalPNL = toBN(0)
    let APYSumA = toBN(0)
    let APYSumB = toBN(0)
    const portfolioUserData = portfolioData
      .filter((portfolio) => !safeGet(() => portfolio.yourEquity.isZero()))
      .map((portfolio) => {
        totalEquityValue = totalEquityValue.plus(portfolio.yourEquityInUSD)
        totalPNL = totalPNL.plus(portfolio.PNLInUSD)
        APYSumA = APYSumA.plus(portfolio.currentAPY.multipliedBy(portfolio.yourEquityInUSD))
        APYSumB = APYSumB.plus(portfolio.yourEquityInUSD)
        return portfolio
      })
    const dashboard = {
      totalEquityValue,
      totalPNL,
      totalPortfolioDeposited: portfolioUserData.length,
      APY: APYSumB.isZero() ? 0 : APYSumA.div(APYSumB),
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
