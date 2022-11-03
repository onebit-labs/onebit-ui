import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getDepositor } from '../adapter/depositor'
import { select } from '../store/depositor'

export const useDepositor = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getDepositor(sliceState), [sliceState])
  return returnValue
}
