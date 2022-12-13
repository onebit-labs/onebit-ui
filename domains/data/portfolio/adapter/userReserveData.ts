import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { MarketReserve } from '..'

export type UserReserveData = {
  scaledBalanceOf: BN
  balanceOf: BN
  walletBalance: BN
  userExpirationTime: number
  userInWhitelist: boolean
}

type UserReserveDataProps = {
  marketReserveData: MarketReserve[]
  balanceOf: Record<string, string>
  scaledBalanceOf: Record<string, string>
  userExpirationTimestampSource: Record<string, number>
}
export const getUserReserveData = ({
  marketReserveData,
  balanceOf,
  scaledBalanceOf,
  userExpirationTimestampSource,
}: UserReserveDataProps) => {
  const now = Date.now()
  const returnValue: Record<string, UserReserveData> = {}
  marketReserveData.forEach((marketReserve) => {
    const { address } = marketReserve
    const balanceOfValue = safeGet(() => balanceOf[address.OToken] || 0)
    const scaledBalanceOfValue = safeGet(() => scaledBalanceOf[address.OToken] || 0)
    const walletBalance = safeGet(() => balanceOf[address.symbol] || 0)
    const userExpirationTime = safeGet(() => userExpirationTimestampSource[address.Vault] || 0)
    returnValue[address.Vault] = {
      balanceOf: toBN(balanceOfValue),
      scaledBalanceOf: toBN(scaledBalanceOfValue),
      walletBalance: toBN(walletBalance),
      userExpirationTime,
      userInWhitelist: now < userExpirationTime,
    }
  })

  return returnValue
}
