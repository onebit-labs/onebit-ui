import { useControllers, useWallet } from 'domains'
import { useERC20, useNetwork } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { getUserReserveData } from '../adapter/userReserveData'
import type { ReserveData } from '../adapter/reserveData'

const useLendingPoolEffect = () => {
  const { networkAccount } = useWallet()
  const {
    address,
    markets,
    contracts: { erc20Service },
  } = useNetwork()
  const {
    erc20: { balanceOf: balanceOfPolling },
  } = useControllers()

  const tokens = useMemo(
    () => markets.map((market) => market.address.OToken).concat([address.USDT]) || [],
    [address.USDT, markets]
  )
  const query = useMemo(
    () => ({
      erc20Service,
      user: networkAccount,
      tokens,
    }),
    [erc20Service, networkAccount, tokens]
  )

  useEffect(() => {
    if (!query.tokens.length || !query.user || !balanceOfPolling) return
    balanceOfPolling.run(query, 600000)
    return () => {
      balanceOfPolling.stop()
    }
  }, [query, balanceOfPolling])

  return {
    networkAccount,
  }
}

type UserReserveDataProps = {
  reserveData: Record<string, ReserveData>
}
export const useUserReserveData = ({ reserveData }: UserReserveDataProps) => {
  const { networkAccount } = useLendingPoolEffect()
  const { balanceOf } = useERC20()
  const userReserveData = useMemo(() => {
    if (!networkAccount) return {} as undefined
    const returnValue = getUserReserveData({ balanceOf, reserveData })
    log('[portfolio] [userReserveData]', returnValue)
    return returnValue
  }, [balanceOf, networkAccount, reserveData])

  return { userReserveData }
}
