import { useControllers } from 'domains'
import { useNetwork, useOnebitAPI } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'

const end = Math.floor(Date.now() / 1000)
const start = end - 60 * 60 * 24 * 90

const useSeriesDailyEffect = () => {
  const { markets } = useNetwork()
  const {
    onebitAPI: { seriesDaily: seriesDailySingle },
  } = useControllers()

  const series = useMemo(() => {
    const seriesSet = new Set<string>()
    markets.forEach((market) => seriesSet.add(market.info.series))
    return Array.from(seriesSet)
  }, [markets])

  const query = useMemo(
    () => ({
      series,
      start,
      end,
    }),
    [series]
  )

  useEffect(() => {
    if (!query.series.length || !seriesDailySingle) return
    seriesDailySingle.run(query)
    return () => {
      seriesDailySingle.stop()
    }
  }, [query, seriesDailySingle])
}

export const useOnebitAPIData = () => {
  useSeriesDailyEffect()
  const { seriesDaily } = useOnebitAPI()

  const returnValue = useMemo(() => {
    const returnValue = {
      seriesDaily,
    }
    log('[portfolio] [OnebitAPIData]', returnValue)
    return returnValue
  }, [seriesDaily])

  return returnValue
}
