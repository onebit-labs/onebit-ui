import { useControllers, useWallet } from 'domains'
import { useNetwork, useOnebitGraph } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { DAY, getCurrentTimestamp, getTimestamp, HalfDay } from 'app/constant'

const useGraphInitEffect = () => {
  const {
    onebitGraph: { vault: vaultPolling, portfolioTerm: portfolioTermPolling, netValue: netValueSingle },
  } = useControllers()
  const {
    subgraph: { name: subgraphName },
  } = useNetwork()

  useEffect(() => {
    if (!vaultPolling || !vaultPolling) return
    vaultPolling.run({ subgraphName }, HalfDay)
    portfolioTermPolling.run({ subgraphName }, HalfDay)

    const endTimestamp = getCurrentTimestamp()
    netValueSingle.run({
      startTimestamp: endTimestamp - getTimestamp(365 * DAY),
      endTimestamp,
      subgraphName,
    })
    return () => {
      vaultPolling.stop()
      portfolioTermPolling.stop()
      netValueSingle.stop()
    }
  }, [netValueSingle, vaultPolling, portfolioTermPolling, subgraphName])
}

const useUserEffect = () => {
  const { networkAccount } = useWallet()
  const {
    onebitGraph: { transaction: transactionPolling, depositor: depositorPolling },
  } = useControllers()
  const {
    subgraph: { name: subgraphName },
  } = useNetwork()

  const query = useMemo(
    () => ({
      account: networkAccount,
      subgraphName,
    }),
    [networkAccount, subgraphName]
  )

  useEffect(() => {
    if (!query.account || !transactionPolling || !depositorPolling) return
    transactionPolling.run(query, 30000)
    depositorPolling.run(query, 30000)
    return () => {
      transactionPolling.stop()
      depositorPolling.stop()
    }
  }, [depositorPolling, query, transactionPolling])
}

export const useOnebitGraphData = () => {
  useGraphInitEffect()
  useUserEffect()
  const { vault, portfolioTerm, transaction, depositor, netValue } = useOnebitGraph()

  const returnValue = useMemo(() => {
    const returnValue = {
      vault,
      portfolioTerm,
      transaction,
      depositor,
      netValue,
    }
    log('[portfolio] [OnebitGraphData]', returnValue)
    return returnValue
  }, [depositor, vault, netValue, portfolioTerm, transaction])

  return returnValue
}

export type OnebitGraphData = ReturnType<typeof useOnebitGraphData>
