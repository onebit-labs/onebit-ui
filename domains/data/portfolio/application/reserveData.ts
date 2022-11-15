import { useControllers } from 'domains'
import { useLendingPool, useNetwork } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { getReserveData } from '../adapter/reserveData'
import { safeGet } from 'app/utils/get'

const useLendingPoolEffect = () => {
  const {
    markets,
    contracts: { lendingPool },
  } = useNetwork()
  const {
    lendingPool: { reserveData: reserveDataPolling, reserveNormalizedIncome: reserveNormalizedIncomeSingle },
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
    reserveNormalizedIncomeSingle.run(query)
    return () => {
      reserveDataPolling.stop()
    }
  }, [query, reserveDataPolling, reserveNormalizedIncomeSingle])
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
    address,
    markets,
    contracts: { chainlinkService },
  } = useNetwork()
  const {
    erc20: { oracle: oracleSingle },
  } = useControllers()

  const data = useMemo(() => {
    const set = new Set<string>()
    markets.forEach((market) => set.add(market.info.symbol))

    const symbols = Array.from(set)

    return symbols.map((symbol) => {
      return {
        symbol,
        oracleChainlinkAddress: safeGet(() => address.oracleChainlinkAddress[symbol]),
      }
    })
  }, [address.oracleChainlinkAddress, markets])

  const query = useMemo(
    () => ({
      chainlinkService,
      data,
    }),
    [chainlinkService, data]
  )

  useEffect(() => {
    if (!query.data.length || !oracleSingle) return
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
  const { reserveDataSource, reserveNormalizedIncomeSource } = useLendingPool()

  const reserveData = useMemo(() => {
    const returnValue = getReserveData(reserveDataSource, reserveNormalizedIncomeSource)
    log('[portfolio] [reserveData]', returnValue)
    return returnValue
  }, [reserveDataSource, reserveNormalizedIncomeSource])

  return { reserveData }
}
