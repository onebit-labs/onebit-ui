import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getVault } from '../adapter/lendingPool'
import { select } from '../store/lendingPool'

export const useVault = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getVault(sliceState), [sliceState])
  return returnValue
}
