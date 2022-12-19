import { useControllers } from 'domains'
import { useVault, useNetwork } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { getReserveData } from '../adapter/reserveData'
import { safeGet } from 'app/utils/get'

const useVaultEffect = () => {
  const {
    markets,
    contracts: { vault },
  } = useNetwork()
  const {
    vault: { reserveData: reserveDataPolling, reserveNormalizedIncome: reserveNormalizedIncomeSingle },
  } = useControllers()

  const vaultAddresses = useMemo(() => markets.map((market) => market.address.Vault) || [], [markets])
  const query = useMemo(
    () => ({
      vaultService: vault,
      vaults: vaultAddresses,
    }),
    [vault, vaultAddresses]
  )

  useEffect(() => {
    if (!query.vaults.length || !reserveDataPolling) return
    reserveDataPolling.run(query, 600000)
    reserveNormalizedIncomeSingle.run(query)
    return () => {
      reserveDataPolling.stop()
      reserveNormalizedIncomeSingle.stop()
    }
  }, [query, reserveDataPolling, reserveNormalizedIncomeSingle])
}
const useERC20TotalSupplyEffect = () => {
  const {
    markets,
    contracts: { erc20Service, oTokenService },
  } = useNetwork()
  const {
    erc20: { totalSupply: totalSupplyPolling, scaledTotalSupply: scaledTotalSupplyPolling },
  } = useControllers()

  const oTokenAddresses = useMemo(() => markets.map((market) => market.address.OToken) || [], [markets])
  const query = useMemo(
    () => ({
      tokens: oTokenAddresses,
      erc20Service,
    }),
    [erc20Service, oTokenAddresses]
  )
  const oTokenQuery = useMemo(
    () => ({
      tokens: oTokenAddresses,
      oTokenService,
    }),
    [oTokenService, oTokenAddresses]
  )

  useEffect(() => {
    if (!query.tokens.length || !totalSupplyPolling) return
    totalSupplyPolling.run(query, 600000)
    return () => {
      totalSupplyPolling.stop()
    }
  }, [query, totalSupplyPolling])

  useEffect(() => {
    if (!oTokenQuery.tokens.length || !scaledTotalSupplyPolling) return
    scaledTotalSupplyPolling.run(oTokenQuery, 600000)
    return () => {
      scaledTotalSupplyPolling.stop()
    }
  }, [oTokenQuery, scaledTotalSupplyPolling])
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
  useVaultEffect()
  useERC20TotalSupplyEffect()
  useERC20oracleEffect()
  const { reserveDataSource, reserveNormalizedIncomeSource } = useVault()

  const reserveData = useMemo(() => {
    const returnValue = getReserveData(reserveDataSource, reserveNormalizedIncomeSource)
    log('[portfolio] [reserveData]', returnValue)
    return returnValue
  }, [reserveDataSource, reserveNormalizedIncomeSource])

  return { reserveData }
}
