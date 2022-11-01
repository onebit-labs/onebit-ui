import { useControllers } from 'domains'
import { useNetwork, useOnebitAPI } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'

const end = Math.floor(Date.now() / 1000)
const start = end - 60 * 60 * 24 * 90

const usePortfolioDailyEffect = () => {
  const { markets } = useNetwork()
  const {
    onebitAPI: { portfolioDaily: portfolioDailySingle },
  } = useControllers()

  const portfolios = useMemo(() => {
    return markets.map((market) => market.info.portfolioName)
  }, [markets])
  const query = useMemo(
    () => ({
      portfolios,
      start,
      end,
    }),
    [portfolios]
  )

  useEffect(() => {
    if (!query.portfolios.length || !portfolioDailySingle) return
    portfolioDailySingle.run(query)
    return () => {
      portfolioDailySingle.stop()
    }
  }, [query, portfolioDailySingle])
}
const useSeriesDailyEffect = () => {
  const { markets } = useNetwork()
  const {
    onebitAPI: { seriesDaily: seriesDailySingle },
  } = useControllers()

  const portfolios = useMemo(() => {
    return markets.map((market) => market.info.portfolioName)
  }, [markets])
  const query = useMemo(
    () => ({
      portfolios,
      start,
      end,
    }),
    [portfolios]
  )

  useEffect(() => {
    if (!query.portfolios.length || !seriesDailySingle) return
    seriesDailySingle.run(query)
    return () => {
      seriesDailySingle.stop()
    }
  }, [query, seriesDailySingle])
}

export const useOnebitAPIData = () => {
  usePortfolioDailyEffect()
  useSeriesDailyEffect()
  const { seriesDaily, portfolioDaily } = useOnebitAPI()

  const returnValue = useMemo(() => {
    const returnValue = {
      seriesDaily,
      portfolioDaily,
    }
    log('[portfolio] [OnebitAPIData]', returnValue)
    return returnValue
  }, [seriesDaily, portfolioDaily])

  return returnValue
}
