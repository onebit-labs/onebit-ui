import { useControllers } from 'domains'
import { useLendingPool, useNetwork } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { getReserveData } from '../adapter/reserveData'

const useLendingPoolEffect = () => {
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
}
const useERC20TotalSupplyEffect = () => {
  const {
    markets,
    contracts: { erc20Service },
  } = useNetwork()
  const {
    erc20: { totalSupply: totalSupplyPolling },
  } = useControllers()

  const oTokenAddresses = useMemo(() => markets.map((market) => market.address.OToken) || [], [markets])
  const query = useMemo(
    () => ({
      tokens: oTokenAddresses,
      erc20Service,
    }),
    [erc20Service, oTokenAddresses]
  )

  useEffect(() => {
    if (!query.tokens.length || !totalSupplyPolling) return
    totalSupplyPolling.run(query, 600000)
    return () => {
      totalSupplyPolling.stop()
    }
  }, [query, totalSupplyPolling])
}
const useERC20oracleEffect = () => {
  const {
    markets,
    contracts: { chainlinkService },
  } = useNetwork()
  const {
    erc20: { oracle: oracleSingle },
  } = useControllers()

  const symbols = useMemo(() => {
    const set = new Set<string>()
    markets.forEach((market) => set.add(market.info.symbol))
    return Array.from(set)
  }, [markets])
  const query = useMemo(
    () => ({
      chainlinkService,
      symbols,
    }),
    [chainlinkService, symbols]
  )

  useEffect(() => {
    if (!query.symbols.length || !oracleSingle) return
    oracleSingle.run(query)
    return () => {
      oracleSingle.stop()
    }
  }, [query, oracleSingle])
}

export const useReserveData = () => {
  useLendingPoolEffect()
  useERC20TotalSupplyEffect()
  useERC20oracleEffect()
  const { reserveDataSource } = useLendingPool()

  const reserveData = useMemo(() => {
    const returnValue = getReserveData(reserveDataSource)
    log('[portfolio] [reserveData]', returnValue)
    return returnValue
  }, [reserveDataSource])

  return { reserveData }
}
