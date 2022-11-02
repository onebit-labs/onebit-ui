import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as lendingPoolSelect } from './store/lendingPool'
import { select as portfolioTermSelect } from './store/portfolioTerm'
import { select as transactionSelect } from './store/transaction'
import { useDepositors } from './application/depositor'

const useOnebitGraphService = () => {
  const lendingPool = useAppSelector(lendingPoolSelect.selectData)
  const portfolioTerm = useAppSelector(portfolioTermSelect.selectData)
  const transaction = useAppSelector(transactionSelect.selectData)
  const depositors = useDepositors()

  return {
    lendingPool,
    portfolioTerm,
    transaction,
    ...depositors,
  }
}
const { Provider: OnebitGraphProvider, createUseContext } = createContext(useOnebitGraphService)
export const createOnebitGraphContext = createUseContext

export default OnebitGraphProvider
