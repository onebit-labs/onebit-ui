import { useControllers, useWallet } from 'domains'
import { useOnebitGraph } from 'domains/data'
import { useEffect, useMemo } from 'react'

import { log } from 'app/utils/dev'

const useGraphInitEffect = () => {
  const {
    onebitGraph: { lendingPool: portfolioDailySingle, portfolioTerm: portfolioTermSingle }
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

const useTransactionEffect = () => {
  const { networkAccount } = useWallet()
  const {
    onebitGraph: { transaction: transactionSingle },
  } = useControllers()

  const query = useMemo(
    () => ({
      account: networkAccount,
    }),
    [networkAccount]
  )

  useEffect(() => {
    if (!query.account || !transactionSingle) return
    transactionSingle.run(query)
    return () => {
      transactionSingle.stop()
    }
  }, [query, transactionSingle])
}

export const useOnebitGraphData = () => {
  useGraphInitEffect()
  useTransactionEffect()
  const { lendingPool, portfolioTerm, transaction } = useOnebitGraph()

  const returnValue = useMemo(() => {
    const returnValue = {
      lendingPool,
      portfolioTerm,
      transaction
    }
    log('[portfolio] [OnebitGraphData]', returnValue)
    return returnValue
  }, [lendingPool, portfolioTerm, transaction])

  return returnValue
}

export type OnebitGraphData = ReturnType<typeof useOnebitGraphData>