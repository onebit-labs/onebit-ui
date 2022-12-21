import { safeGet } from 'app/utils/get'
import type { ReserveData } from './reserveData'
import { differenceInDays, differenceInSeconds } from 'date-fns'

const now = new Date()
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

export const getPortfolioDaysleft = (
  reserve: Pick<ReserveData, 'redemptionBeginTimestamp' | 'purchaseEndTimestamp'>
): PortfolioLockTime => {
  const portfolioDaysleft = safeGet(() => {
    const { redemptionBeginTimestamp } = reserve
    const daysleft = differenceInDays(redemptionBeginTimestamp, now)
    const lockTime = getPortfolioLockTime(reserve)
    return Math.min(daysleft, lockTime)
  })

  return portfolioDaysleft || 0
}

export const getPortfolioLockedTimeInSeconds = (
  reserve: Pick<ReserveData, 'purchaseEndTimestamp' | 'redemptionBeginTimestamp'>
): PortfolioLockTime => {
  const portfolioLockedTimeInSeconds = safeGet(() => {
    const { purchaseEndTimestamp, redemptionBeginTimestamp } = reserve
    const lockedTimeInSeconds = differenceInSeconds(
      Math.min(now.getTime(), redemptionBeginTimestamp),
      purchaseEndTimestamp
    )
    return lockedTimeInSeconds < 0 ? 0 : lockedTimeInSeconds
  })

  return portfolioLockedTimeInSeconds || 0
}
