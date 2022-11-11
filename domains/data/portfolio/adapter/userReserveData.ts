import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { MarketReserve } from '..'

export type UserReserveData = {
  balanceOf: BN
  walletBalance: BN
}

type UserReserveDataProps = {
  marketReserveData: MarketReserve[]
  balanceOf: Record<string, string>
}
export const getUserReserveData = ({ marketReserveData, balanceOf }: UserReserveDataProps) => {
  const returnValue: Record<string, UserReserveData> = {}
  marketReserveData.forEach((marketReserve) => {
    const { address } = marketReserve
    const balanceOfValue = safeGet(() => balanceOf[address.OToken] || 0)
    const walletBalance = safeGet(() => balanceOf[address.symbol] || 0)
    returnValue[address.LendingPool] = {
      balanceOf: toBN(balanceOfValue),
      walletBalance: toBN(walletBalance),
    }
  })

  return returnValue
}
