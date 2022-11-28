import { getAddress, getBigNumber, getNumber } from 'app/utils/get'
import type { SliceState } from '../store/transaction/adapter'

export const getTransactionType = (type: number) => {
  switch (type) {
    case 1:
      return 'deposit'
    case 2:
      return 'withdrawal'
    case 3:
      return 'Fund Transfer'
  }
}

export type TransactionType = ReturnType<typeof getTransactionType>

export type Transaction = {
  id: string
  createTimestamp: number
  amount: BN
  lendingPool: string
  type: TransactionType
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
