import { createContext } from 'app/utils/createContext'

import { useERC20Controller } from 'domains/data/erc20/application/controllers'
import { useLendingPoolController } from 'domains/data/lendingPool/application/controllers'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'

export const useControllersService = () => {
  const erc20 = useERC20Controller()
  const lendingPool = useLendingPoolController()
  const pageProcess = usePageProgressController()

  return { erc20, lendingPool, pageProcess }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
