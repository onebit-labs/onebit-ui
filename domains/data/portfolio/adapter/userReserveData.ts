import { safeGet } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { ReserveData } from './reserveData'

export type UserReserveData = {
  balanceOf: BN
  walletBalance: BN
}

type UserReserveDataProps = {
  reserveData: Record<string, ReserveData>
  balanceOf: Record<string, string>
}
export const getUserReserveData = ({ reserveData, balanceOf }: UserReserveDataProps) => {
  const returnValue: Record<string, UserReserveData> = {}
  Object.keys(reserveData || {}).forEach((key) => {
    const balanceOfValue = safeGet(() => balanceOf[reserveData[key].oTokenAddress] || 0)
    const walletBalance = safeGet(() => balanceOf['0x5c674632e44e5b42b17c4344d6d5bc4b6dc5a8a9'] || 0)
    returnValue[key] = {
      balanceOf: toBN(balanceOfValue),
      walletBalance: toBN(walletBalance),
    }
  })

  return returnValue
}
