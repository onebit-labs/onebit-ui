import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'
import { useNetwork } from '..'
import { getPortfolioLockTime } from './adapter/lockTime'
import type { ReserveData } from './adapter/reserveData'
import type { PortfolioStatus } from './adapter/status'
import { getPortfolioStatus } from './adapter/status'
import type { UserReserveData } from './adapter/userReserveData'

import { useReserveData } from './application/reserveData'
import { useUserReserveData } from './application/userReserveData'

export type Portfolio = Partial<ReserveData & UserReserveData> & {
  id: string
  portfolioName: string
  symbol: string
  status: PortfolioStatus
  lockTime: number
}

const usePortfolioService = () => {
  const { reserveData } = useReserveData()
  const { userReserveData } = useUserReserveData({ reserveData })
  const { markets } = useNetwork()

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
        lockTime: getPortfolioLockTime(reserve)
      } as Portfolio
    })
    log('[portfolio] [portfolioData]', returnValue)
    return returnValue
  }, [markets, reserveData, userReserveData])

  return {
    reserveData,
    userReserveData,
    portfolioData,
  }
}
const { Provider: PortfolioProvider, createUseContext } = createContext(usePortfolioService)
export const createPortfolioContext = createUseContext

export default PortfolioProvider
