import { safeGet } from 'app/utils/get'
import type { ReserveData } from './reserveData'
import { differenceInDays } from 'date-fns'

export type PortfolioLockTime = number
export const getPortfolioLockTime = (
  reserve: Pick<ReserveData, 'redemptionBeginTimestamp' | 'purchaseEndTimestamp'>
): PortfolioLockTime => {
  const portfolioLockTime = safeGet(() => {
    const { redemptionBeginTimestamp, purchaseEndTimestamp } = reserve
    const lockTime = differenceInDays(redemptionBeginTimestamp, purchaseEndTimestamp)
    return lockTime
  })

  return portfolioLockTime || 0
}
