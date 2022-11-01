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
import type { ContractsAddress } from '../network/adapter/markets'
import type { LendingPoolGraph, PortfolioTermGraph, TransactionGraph } from './adapter/onebitGraph'
import { getTransactionGraph } from './adapter/onebitGraph'
import { getPortfolioTermGraph } from './adapter/onebitGraph'
import { getLendingPoolGraph } from './adapter/onebitGraph'

export type Portfolio = Partial<
  ReserveData &
    UserReserveData &
    LendingPoolGraph & {
      portfolioTerm: PortfolioTermGraph[]
    }
> & {
  id: string
  portfolioName: string
  symbol: string
  description: string
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

  address: ContractsAddress
}

export type UserPortfolio = {
  transactions: TransactionGraph[]
}

const usePortfolioService = () => {
  const { reserveData } = useReserveData()
  const { userReserveData } = useUserReserveData({ reserveData })
  const { markets } = useNetwork()
  const erc20Data = useERC20()
  const { seriesDaily, portfolioDaily } = useOnebitAPIData()
  const onebitGraphData = useOnebitGraphData()

  const portfolioData = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, info, address } = market
      const lendingPoolAddress = address.LendingPool
      const oracle = toBN(safeGet(() => erc20Data.oracle[info.symbol]) || 0)
      const reserve = reserveData[lendingPoolAddress]

      const totalSupply = toBN(safeGet(() => erc20Data.totalSupply[address.OToken]) || 0)

      return {
        id,
        address,
        ...info,
        ...reserve,
        ...userReserveData[lendingPoolAddress],
        status: getPortfolioStatus(reserve),
        lockTime: getPortfolioLockTime(reserve),
        oracle,
        totalSupply,
        totalSupplyInUSD: totalSupply.multipliedBy(oracle),

        estimatedAPY: toBN(0),
        currentAPY: toBN(0),
        yourEquity: toBN(0),
        PNL: toBN(0),
        previousPNL: toBN(0),

        portfolioDaily: safeGet(() => portfolioDaily[info.portfolioName]) || [],
        seriesDaily: safeGet(() => seriesDaily[info.portfolioName]) || [],

        ...getLendingPoolGraph(lendingPoolAddress, onebitGraphData),
        ...getPortfolioTermGraph(lendingPoolAddress, onebitGraphData),
      } as Portfolio
    })
    log('[portfolio] [portfolioData]', returnValue)
    return returnValue
  }, [
    erc20Data.oracle,
    erc20Data.totalSupply,
    markets,
    onebitGraphData,
    portfolioDaily,
    reserveData,
    seriesDaily,
    userReserveData,
  ])

  const portfolioUserData = useMemo(() => {
    const transactions = getTransactionGraph(onebitGraphData, portfolioData)
    const returnValue = {
      transactions,
    }
    log('[portfolio] [portfolioUserData]', returnValue)
    return returnValue
  }, [onebitGraphData, portfolioData])

  return {
    portfolioData,
    portfolioUserData,
  }
}
const { Provider: PortfolioProvider, createUseContext } = createContext(usePortfolioService)
export const createPortfolioContext = createUseContext

export default PortfolioProvider
