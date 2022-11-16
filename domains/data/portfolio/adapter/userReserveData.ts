import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { MarketReserve } from '..'

export type UserReserveData = {
  scaledBalanceOf: BN
  balanceOf: BN
  walletBalance: BN
}

type UserReserveDataProps = {
  marketReserveData: MarketReserve[]
  balanceOf: Record<string, string>
  scaledBalanceOf: Record<string, string>
}
export const getUserReserveData = ({ marketReserveData, balanceOf, scaledBalanceOf }: UserReserveDataProps) => {
  const returnValue: Record<string, UserReserveData> = {}
  marketReserveData.forEach((marketReserve) => {
    const { address } = marketReserve
    const balanceOfValue = safeGet(() => balanceOf[address.OToken] || 0)
    const scaledBalanceOfValue = safeGet(() => scaledBalanceOf[address.OToken] || 0)
    const walletBalance = safeGet(() => balanceOf[address.symbol] || 0)
    returnValue[address.LendingPool] = {
      balanceOf: toBN(balanceOfValue),
      scaledBalanceOf: toBN(scaledBalanceOfValue),
      walletBalance: toBN(walletBalance),
    }
  })

  return returnValue
}
