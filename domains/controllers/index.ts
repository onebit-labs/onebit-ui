import { createContext } from 'app/utils/createContext'

import { useERC20Controller } from 'domains/data/erc20/application/controllers'
import { useLendingPoolController } from 'domains/data/lendingPool/application/controllers'

export const useControllersService = () => {
  const erc20 = useERC20Controller()
  const lendingPool = useLendingPoolController()

  return { erc20, lendingPool }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
