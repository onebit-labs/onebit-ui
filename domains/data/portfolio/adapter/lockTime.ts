import { safeGet } from 'app/utils/get'
import type { ReserveData } from './reserveData'
import { differenceInDays } from 'date-fns'

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

export const getPortfolioLockDays = (reserve: Pick<ReserveData, 'purchaseEndTimestamp'>): PortfolioLockTime => {
  const portfolioLockDays = safeGet(() => {
    const { purchaseEndTimestamp } = reserve
    const lockDays = differenceInDays(now, purchaseEndTimestamp)
    return lockDays
  })

  return portfolioLockDays || 0
}
