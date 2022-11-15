import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getNetValue } from '../adapter/netValue'
import { select } from '../store/netValue'

export const useNetValue = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getNetValue(sliceState), [sliceState])
  return returnValue
}
