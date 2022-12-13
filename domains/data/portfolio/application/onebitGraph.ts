import { useControllers, useWallet } from 'domains'
import { useOnebitGraph } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'
import { DAY, getCurrentTimestamp, getTimestamp } from 'app/constant'

const useGraphInitEffect = () => {
  const {
    onebitGraph: { vault: vaultSingle, portfolioTerm: portfolioTermSingle, netValue: netValueSingle },
  } = useControllers()

  useEffect(() => {
    if (!vaultSingle || !vaultSingle) return
    vaultSingle.run()
    portfolioTermSingle.run()

    const endTimestamp = getCurrentTimestamp()
    netValueSingle.run({
      startTimestamp: endTimestamp - getTimestamp(90 * DAY),
      endTimestamp,
    })
    return () => {
      vaultSingle.stop()
      portfolioTermSingle.stop()
      netValueSingle.stop()
    }
  }, [netValueSingle, vaultSingle, portfolioTermSingle])
}

const useUserEffect = () => {
  const { networkAccount } = useWallet()
  const {
    onebitGraph: { transaction: transactionPolling, depositor: depositorPolling },
  } = useControllers()

  const query = useMemo(
    () => ({
      account: networkAccount,
    }),
    [networkAccount]
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
