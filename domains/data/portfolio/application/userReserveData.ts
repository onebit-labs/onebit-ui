import { useControllers, useWallet } from 'domains'
import { useERC20, useNetwork } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { getUserReserveData } from '../adapter/userReserveData'
import type { MarketReserve } from '..'

const useLendingPoolEffect = () => {
  const { networkAccount } = useWallet()
  const {
    address,
    markets,
    contracts: { erc20Service, oTokenService },
  } = useNetwork()
  const {
    erc20: { balanceOf: balanceOfPolling, scaledBalanceOf: scaledBalanceOfPolling },
  } = useControllers()

  const oTokens = useMemo(() => markets.map((market) => market.address.OToken) || [], [markets])

  const tokens = useMemo(
    () => oTokens.concat([address.USDT, address.WBTC]) || [],
    [address.USDT, address.WBTC, oTokens]
  )
  const query = useMemo(
    () => ({
      erc20Service,
      user: networkAccount,
      tokens,
    }),
    [erc20Service, networkAccount, tokens]
  )
  const oTokenQuery = useMemo(
    () => ({
      oTokenService,
      user: networkAccount,
      tokens: oTokens,
    }),
    [networkAccount, oTokenService, oTokens]
  )

  useEffect(() => {
    if (!query.tokens.length || !query.user || !balanceOfPolling) return
    balanceOfPolling.run(query, 600000)
    return () => {
      balanceOfPolling.stop()
    }
  }, [query, balanceOfPolling])

  useEffect(() => {
    if (!oTokenQuery.tokens.length || !oTokenQuery.user || !scaledBalanceOfPolling) return
    scaledBalanceOfPolling.run(oTokenQuery, 600000)
    return () => {
      scaledBalanceOfPolling.stop()
    }
  }, [oTokenQuery, scaledBalanceOfPolling])

  return {
    networkAccount,
  }
}

type UserReserveDataProps = {
  marketReserveData: MarketReserve[]
}
export const useUserReserveData = ({ marketReserveData }: UserReserveDataProps) => {
  const { networkAccount } = useLendingPoolEffect()
  const { balanceOf, scaledBalanceOf } = useERC20()
  const userReserveData = useMemo(() => {
    if (!networkAccount) return {} as undefined
    const returnValue = getUserReserveData({ balanceOf, scaledBalanceOf, marketReserveData })
    log('[portfolio] [userReserveData]', returnValue)
    return returnValue
  }, [balanceOf, marketReserveData, networkAccount, scaledBalanceOf])

  return { userReserveData }
}
