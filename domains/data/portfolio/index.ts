import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'

import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

import { useERC20, useNetwork } from '..'

import { getPortfolioDaysleft, getPortfolioLockDays, getPortfolioLockTime } from './adapter/lockTime'
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
import type { Vault } from '../onebit-graph/adapter/vault'
import type { PortfolioTerm } from '../onebit-graph/adapter/portfolioTerm'
import type { NetValue } from '../onebit-graph/adapter/netValue'
import { getFixedNetValues } from '../onebit-graph/adapter/netValue'
import type { Transaction } from '../onebit-graph/adapter/transaction'
import { useWallet } from 'domains'
import { getAPYByNetValue, getCurrentAPY } from './adapter/currentAPY'
import { getNetValueBeforeDeduction } from './adapter/netvalue'

export type MarketReserve = Partial<ReserveData> &
  MarketInfo & {
    id: string
    address: ContractsAddress
  }
export type Portfolio = Partial<
  UserReserveData &
    Vault & {
      portfolioTerm: PortfolioTerm[]
      netValues: NetValue[]
    }
> &
  MarketReserve & {
    oracle?: BN
    totalSupply?: BN
    totalSupplyInUSD?: BN
    totalSupplyWithAPI?: BN
    totalSupplyWithAPIInUSD?: BN
    scaledTotalSupply?: BN
    scaledTotalSupplyInUSD?: BN
    initialDeposit?: BN

    status: PortfolioStatus
    lockTime: number
    lockDays: number
    daysleft: number

    currentAPY: BN
    currentAPYWithAPI: BN
    depositors: BN
    yourEquity: BN
    yourEquityInUSD: BN
    PNL: BN
    PNLRate: BN
    PNLInUSD: BN
    netValue: BN
    netValueBeforeDeduction: BN
    netValueWithAPI: BN

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
      const vaultAddress = address.Vault
      const reserve = reserveData[vaultAddress]
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
  const { seriesDaily, portfolioDaily: portfolioDailyData } = useOnebitAPIData()
  const { networkAccount } = useWallet()

  const portfolioData = useMemo(() => {
    const returnValue = marketReserveData.map((market) => {
      const { id, address, symbol, portfolioAPIName, series } = market
      const vaultAddress = address.Vault
      const oracle = toBN(safeGet(() => erc20Data.oracle[symbol]) || 0)
      const reserve = reserveData[vaultAddress]
      const userReserve = userReserveData[vaultAddress]
      const vault = onebitGraphData.vault.find((i) => i.id === vaultAddress)
      const portfolioTerm = onebitGraphData.portfolioTerm.filter((i) => i.vault === vaultAddress)
      const netValues = getFixedNetValues(onebitGraphData.netValue.filter((i) => i.vault === vaultAddress))

      const totalSupply = toBN(safeGet(() => erc20Data.totalSupply[address.OToken]) || 0)
      const scaledTotalSupply = toBN(safeGet(() => erc20Data.scaledTotalSupply[address.OToken]) || 0)
      const status = getPortfolioStatus(reserve)
      let currentAPY = toBN(0)
      let currentAPYWithAPI = toBN(0)
      const portfolioDaily = safeGet(() => portfolioDailyData[portfolioAPIName]) || ([] as undefined)
      const lockTime = getPortfolioLockTime(reserve)
      let daysleft = 0
      let lockDays = 0
      const netValueWithAPI = safeGet(() => toBN(portfolioDaily[portfolioDaily.length - 1].y)) || toBN(0)
      const initialDeposit = toBN(safeGet(() => scaledTotalSupply.multipliedBy(reserve.previousLiquidityIndex) || 0))
      const totalSupplyWithAPI = toBN(safeGet(() => initialDeposit.multipliedBy(netValueWithAPI) || 0))

      if (status != 'open') {
        daysleft = getPortfolioDaysleft(reserve)
        lockDays = getPortfolioLockDays(reserve)
        currentAPY = getCurrentAPY(reserve)
        currentAPYWithAPI = getAPYByNetValue(netValueWithAPI, lockDays)
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
      const netValueBeforeDeduction = getNetValueBeforeDeduction({
        initialDeposit,
        lockDays,
        totalSupply,
        ...reserve,
      })

      const returnValue: Portfolio = {
        ...market,
        ...vault,
        ...userReserve,
        ...reserve,
        portfolioTerm: [],
        status,
        lockTime,
        lockDays,
        daysleft,

        oracle,
        totalSupply,
        totalSupplyInUSD: totalSupply.multipliedBy(oracle),
        totalSupplyWithAPI,
        totalSupplyWithAPIInUSD: totalSupplyWithAPI.multipliedBy(oracle),

        scaledTotalSupply,
        scaledTotalSupplyInUSD: scaledTotalSupply.multipliedBy(oracle),
        initialDeposit,

        currentAPY,
        currentAPYWithAPI,
        yourEquity,
        yourEquityInUSD,
        netValue,
        netValueBeforeDeduction,
        netValues,
        PNL,
        PNLRate,
        PNLInUSD,

        portfolioDaily,
        netValueWithAPI,
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
    onebitGraphData.vault,
    onebitGraphData.netValue,
    onebitGraphData.portfolioTerm,
    portfolioDailyData,
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
