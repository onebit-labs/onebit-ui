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
import { valueToBigNumber } from 'app/utils/math'
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
        oracle: valueToBigNumber(safeGet(() => oracle[info.symbol]) || 0),
        totalSupply: valueToBigNumber(safeGet(() => totalSupply[address.OToken]) || 0),

        estimatedAPY: valueToBigNumber(0),
        currentAPY: valueToBigNumber(0),
        depositors: valueToBigNumber(0),
        yourEquity: valueToBigNumber(0),
        PNL: valueToBigNumber(0),
        previousPNL: valueToBigNumber(0),
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
