import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as lendingPoolSelect } from './store/lendingPool'
import { select as portfolioTermSelect } from './store/portfolioTerm'

const useOnebitGraphService = () => {
  const lendingPool = useAppSelector(lendingPoolSelect.selectData)
  const portfolioTerm = useAppSelector(portfolioTermSelect.selectData)

  return {
    lendingPool,
    portfolioTerm
  }
}
const { Provider: OnebitGraphProvider, createUseContext } = createContext(useOnebitGraphService)
export const createOnebitGraphContext = createUseContext

export default OnebitGraphProvider
