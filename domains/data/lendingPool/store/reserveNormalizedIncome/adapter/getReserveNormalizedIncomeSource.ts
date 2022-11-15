import { toBN } from 'lib/math'
import type { BNValue } from 'lib/math/types'

export const getReserveNormalizedIncomeSource = (normalizedIncome: BNValue) => {
  return toBN(normalizedIncome).toString()
}
