import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getDepositor } from '../adapter/depositor'
import { select } from '../store/depositor'

export const useDepositors = () => {
  const sliceState = useAppSelector(select.selectData)
  const depositors = useMemo(() => getDepositor(sliceState), [sliceState])
  return { depositors }
}
