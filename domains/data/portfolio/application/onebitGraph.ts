import { useControllers, useWallet } from 'domains'
import { useOnebitGraph } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'

const useGraphInitEffect = () => {
  const {
    onebitGraph: { lendingPool: portfolioDailySingle, portfolioTerm: portfolioTermSingle },
  } = useControllers()

  useEffect(() => {
    if (!portfolioDailySingle || !portfolioDailySingle) return
    portfolioDailySingle.run()
    portfolioTermSingle.run()
    return () => {
      portfolioDailySingle.stop()
      portfolioTermSingle.stop()
    }
  }, [portfolioDailySingle, portfolioTermSingle])
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
  const { lendingPool, portfolioTerm, transaction, depositors } = useOnebitGraph()

  const returnValue = useMemo(() => {
    const returnValue = {
      lendingPool,
      portfolioTerm,
      transaction,
      depositors,
    }
    log('[portfolio] [OnebitGraphData]', returnValue)
    return returnValue
  }, [depositors, lendingPool, portfolioTerm, transaction])

  return returnValue
}

export type OnebitGraphData = ReturnType<typeof useOnebitGraphData>
