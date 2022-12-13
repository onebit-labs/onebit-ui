import { createContext } from 'app/utils/createContext'

import { useDepositor } from './application/depositor'
import { useTransaction } from './application/transaction'
import { usePortfolioTerm } from './application/portfolioTerm'
import { useVault } from './application/vault'
import { useNetValue } from './application/netValue'

const useOnebitGraphService = () => {
  const vault = useVault()
  const depositor = useDepositor()
  const transaction = useTransaction()
  const portfolioTerm = usePortfolioTerm()
  const netValue = useNetValue()

  return {
    vault,
    portfolioTerm,
    transaction,
    depositor,
    netValue,
  }
}
const { Provider: OnebitGraphProvider, createUseContext } = createContext(useOnebitGraphService)
export const createOnebitGraphContext = createUseContext

export default OnebitGraphProvider
