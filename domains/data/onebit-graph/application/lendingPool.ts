import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getLendingPool } from '../adapter/lendingPool'
import { select } from '../store/lendingPool'

export const useLendingPool = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getLendingPool(sliceState), [sliceState])
  return returnValue
}
