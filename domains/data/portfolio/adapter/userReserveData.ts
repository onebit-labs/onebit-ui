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
    const walletBalance = safeGet(() => balanceOf['0xe3666662730808c69b235f1f6dd8d32315c1769b'] || 0)
    returnValue[key] = {
      balanceOf: toBN(balanceOfValue),
      walletBalance: toBN(walletBalance),
    }
  })

  return returnValue
}
