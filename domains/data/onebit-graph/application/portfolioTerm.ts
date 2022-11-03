import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { getPortfolioTerm } from '../adapter/portfolioTerm'
import { select } from '../store/portfolioTerm'

export const usePortfolioTerm = () => {
  const sliceState = useAppSelector(select.selectData)
  const returnValue = useMemo(() => getPortfolioTerm(sliceState), [sliceState])
  return returnValue
}
