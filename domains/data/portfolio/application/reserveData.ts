import { useControllers } from 'domains'
import { useLendingPool, useNetwork } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { getReserveData } from '../adapter/reserveData'

export const useReserveData = () => {
  const {
    markets,
    contracts: { lendingPool },
  } = useNetwork()
  const {
    lendingPool: { reserveData: reserveDataPolling },
  } = useControllers()

  const lendingPoolAddresses = useMemo(() => markets.map((market) => market.address.LendingPool) || [], [markets])
  const query = useMemo(
    () => ({
      lendingPoolService: lendingPool,
      lendingPools: lendingPoolAddresses,
    }),
    [lendingPool, lendingPoolAddresses]
  )

  useEffect(() => {
    if (!query.lendingPools.length || !reserveDataPolling) return
    reserveDataPolling.run(query, 600000)
    return () => {
      reserveDataPolling.stop()
    }
  }, [query, reserveDataPolling])

  const { reserveDataSource } = useLendingPool()
  const reserveData = useMemo(() => {
    const returnValue = getReserveData(reserveDataSource)
    log('[portfolio] [reserveData]', returnValue)
    return returnValue
  }, [reserveDataSource])

  return { reserveData }
}
