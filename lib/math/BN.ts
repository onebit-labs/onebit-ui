import BigNumber from 'bignumber.js'
import type { BNValue } from './types'

BigNumber.config({ EXPONENTIAL_AT: 1e9 })

export function toBN(amount: BNValue): BigNumber {
  let value: BigNumber.Value

  if (!amount) {
    value = 0
  } else if (amount instanceof BigNumber) {
    return amount
  } else if (typeof amount === 'string' || typeof amount === 'number') {
    value = amount
  } else if (amount._hex) {
    value = amount._hex
  } else {
    value = amount.toString()
  }

  return new BigNumber(value)
}

export function normalize(n: BNValue, decimals: number): BigNumber {
  return toBN(n).shiftedBy(decimals * -1)
}

export const BN = BigNumber
export { BigNumber as EthersBN } from '@ethersproject/bignumber'
