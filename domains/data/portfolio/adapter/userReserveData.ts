import { safeGet } from 'app/utils/get'
import { valueToBigNumber } from 'app/utils/math'
import type { BigNumber } from 'bignumber.js'
import type { ReserveData } from './reserveData'

export type UserReserveData = {
  balanceOf: BigNumber
}

type UserReserveDataProps = {
  reserveData: Record<string, ReserveData>
  balanceOf: Record<string, string>
}
export const getUserReserveData = ({ reserveData, balanceOf }: UserReserveDataProps) => {
  const returnValue: Record<string, UserReserveData> = {}
  Object.keys(reserveData || {}).forEach((key) => {
    const balanceOfValue = safeGet(() => balanceOf[reserveData[key].oTokenAddress] || 0)
    returnValue[key] = {
      balanceOf: valueToBigNumber(balanceOfValue),
    }
  })

  return returnValue
}
