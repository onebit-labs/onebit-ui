import { getAddress, getBigNumber, getNumber } from 'app/utils/get'
import type { SliceState } from '../store/transaction/adapter'

const getTransactionType = (type: number) => {
  switch (type) {
    case 1:
      return 'deposit'
    case 2:
      return 'withdrawal'
  }
}

export type Transaction = {
  id: string
  createTimestamp: number
  amount: BN
  lendingPool: string
  type: 'deposit' | 'withdrawal'
}
export const getTransaction = (transaction: SliceState) => {
  if (!transaction) return []
  const returnValue = transaction.map((t) => {
    const timestamps = getNumber(t, ['createTimestamp'])
    const returnValue: Transaction = {
      ...t,
      ...timestamps,
      ...getAddress(t, ['lendingPool']),
      ...getBigNumber(t, ['amount'], 18),
      type: getTransactionType(t.type),
    }
    return returnValue
  })

  return returnValue
}
