import { safeGet } from 'app/utils/get'
import type { ReserveData } from './reserveData'
import { differenceInDays } from 'date-fns'

export type PortfolioLockTime = number
export const getPortfolioLockTime = (
  reserve: Pick<ReserveData, 'purchaseBeginTimestamp' | 'purchaseEndTimestamp'>
): PortfolioLockTime => {
  const portfolioLockTime = safeGet(() => {
    const { purchaseBeginTimestamp, purchaseEndTimestamp } = reserve
    const lockTime = differenceInDays(purchaseEndTimestamp, purchaseBeginTimestamp)
    return lockTime
  })

  return portfolioLockTime || 0
}
