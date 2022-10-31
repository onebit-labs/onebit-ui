import { BN, toBN } from '../BN'
import type { BNValue } from '../types'

export const toFixed = (value: BNValue, fractionDigits = 2) => {
  const BNDigit = BN.clone({ DECIMAL_PLACES: fractionDigits })
  return new BNDigit(toBN(value)).div(1).toString()
}
