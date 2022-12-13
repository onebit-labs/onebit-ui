import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getVault } from '../adapter/vault'
import { select } from '../store/vault'

export const useVault = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getVault(sliceState), [sliceState])
  return returnValue
}
