import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'
import type Bignumber from 'bignumber.js'
import { useERC20, useNetwork } from '..'
import { getPortfolioLockTime } from './adapter/lockTime'
import type { ReserveData } from './adapter/reserveData'
import type { PortfolioStatus } from './adapter/status'
import { getPortfolioStatus } from './adapter/status'
import type { UserReserveData } from './adapter/userReserveData'

import { useReserveData } from './application/reserveData'
import { useUserReserveData } from './application/userReserveData'
import { toBN } from 'lib/math'
import { safeGet } from 'app/utils/get'

export type Portfolio = Partial<ReserveData & UserReserveData> & {
  id: string
  portfolioName: string
  symbol: string
  description: string
  oracle?: Bignumber
  status: PortfolioStatus
  lockTime: number

  estimatedAPY: Bignumber
  currentAPY: Bignumber
  depositors: Bignumber
  yourEquity: Bignumber
  PNL: Bignumber
  previousPNL: Bignumber
}

const usePortfolioService = () => {
  const { reserveData } = useReserveData()
  const { userReserveData } = useUserReserveData({ reserveData })
  const { markets } = useNetwork()
  const { oracle, totalSupply } = useERC20()

  const portfolioData = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, info, address } = market
      const pool = address.LendingPool
      const reserve = reserveData[pool]

      return {
        id,
        ...info,
        ...reserve,
        ...userReserveData[pool],
        status: getPortfolioStatus(reserve),
        lockTime: getPortfolioLockTime(reserve),
        oracle: toBN(safeGet(() => oracle[info.symbol]) || 0),
        totalSupply: toBN(safeGet(() => totalSupply[address.OToken]) || 0),

        estimatedAPY: toBN(0),
        currentAPY: toBN(0),
        depositors: toBN(0),
        yourEquity: toBN(0),
        PNL: toBN(0),
        previousPNL: toBN(0),
      } as Portfolio
    })
    log('[portfolio] [portfolioData]', returnValue)
    return returnValue
  }, [markets, oracle, reserveData, totalSupply, userReserveData])

  return {
    reserveData,
    userReserveData,
    portfolioData,
  }
}
const { Provider: PortfolioProvider, createUseContext } = createContext(usePortfolioService)
export const createPortfolioContext = createUseContext

export default PortfolioProvider
