import { createContext } from 'app/utils/createContext'

import { useERC20Controller } from 'domains/data/erc20/application/controllers'

export const useControllersService = () => {
  const erc20 = useERC20Controller()

  return { erc20 }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
