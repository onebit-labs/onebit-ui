import { useControllers } from 'domains'
import { useOnebitGraph } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'

const useGraphInitEffect = () => {
  const {
    onebitGraph: { lendingPool: portfolioDailySingle, portfolioTerm: portfolioTermSingle }
  } = useControllers()

  useEffect(() => {
    if (!portfolioDailySingle || !portfolioDailySingle) return
    portfolioDailySingle.run()
    portfolioTermSingle.run()
    return () => {
      portfolioDailySingle.stop()
      portfolioTermSingle.stop()
    }
  }, [portfolioDailySingle, portfolioTermSingle])
}

export const useOnebitGraphData = () => {
  useGraphInitEffect()
  const { lendingPool, portfolioTerm } = useOnebitGraph()

  const returnValue = useMemo(() => {
    const returnValue = {
      lendingPool, portfolioTerm
    }
    log('[portfolio] [OnebitGraphData]', returnValue)
    return returnValue
  }, [lendingPool, portfolioTerm])

  return returnValue
}

export type OnebitGraphData = ReturnType<typeof useOnebitGraphData>