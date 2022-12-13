import { SECONDS_PER_YEAR } from 'app/constant'
import { toBN } from 'lib/math'
import type { Portfolio } from '..'

type CurrentAPYProps = Pick<Portfolio, 'liquidityIndex' | 'previousLiquidityIndex' | 'purchaseEndTimestamp'>
export const getCurrentAPY = ({ liquidityIndex, previousLiquidityIndex, purchaseEndTimestamp }: CurrentAPYProps) => {
  let currentAPY = toBN(0)
  currentAPY = liquidityIndex
    .div(previousLiquidityIndex)
    .minus(1)
    .multipliedBy(SECONDS_PER_YEAR)
    .multipliedBy(1000)
    .div(Date.now() - purchaseEndTimestamp)
  currentAPY = currentAPY.lt(-1) ? toBN(-1) : currentAPY
  return currentAPY
}

export const getAPYByNetValue = (netValue: BN, lockDays: number) => {
  return netValue.minus(1).multipliedBy(toBN(365).div(lockDays))
}
