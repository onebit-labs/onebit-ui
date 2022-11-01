import { createContext } from 'app/utils/createContext'

import { useERC20Controller } from 'domains/data/erc20/application/controllers'
import { useLendingPoolController } from 'domains/data/lendingPool/application/controllers'
import { useOnebitAPIController } from 'domains/data/onebit-api/application/controllers'
import { useOnebitGraphController } from 'domains/data/onebit-graph/application/controllers'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'

export const useControllersService = () => {
  const erc20 = useERC20Controller()
  const lendingPool = useLendingPoolController()
  const pageProcess = usePageProgressController()
  const onebitAPI = useOnebitAPIController()
  const onebitGraph = useOnebitGraphController()

  return { erc20, lendingPool, pageProcess, onebitAPI, onebitGraph }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
