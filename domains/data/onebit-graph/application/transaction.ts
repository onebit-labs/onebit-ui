import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getTransaction } from '../adapter/transaction'
import { select } from '../store/transaction'

export const useTransaction = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getTransaction(sliceState), [sliceState])
  return returnValue
}
