import { createContext } from 'app/utils/createContext'

import { useDepositor } from './application/depositor'
import { useTransaction } from './application/transaction'
import { usePortfolioTerm } from './application/portfolioTerm'
import { useLendingPool } from './application/lendingPool'

const useOnebitGraphService = () => {
  const lendingPool = useLendingPool()
  const depositor = useDepositor()
  const transaction = useTransaction()
  const portfolioTerm = usePortfolioTerm()

  return {
    lendingPool,
    portfolioTerm,
    transaction,
    depositor,
  }
}
const { Provider: OnebitGraphProvider, createUseContext } = createContext(useOnebitGraphService)
export const createOnebitGraphContext = createUseContext

export default OnebitGraphProvider
