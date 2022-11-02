import { safeGet } from 'app/utils/get'
import type { ReserveData } from './reserveData'

export type PortfolioStatus = 'open' | 'lockedUp'
export const getPortfolioStatus = (reserve: ReserveData): PortfolioStatus => {
  const portfolioStatus = safeGet(() => {
    const { redemptionBeginTimestamp, purchaseEndTimestamp } = reserve
    const now = Date.now()
    if (purchaseEndTimestamp < now && now < redemptionBeginTimestamp) return 'lockedUp'
    return 'open'
  })

  return portfolioStatus || 'open'
}
