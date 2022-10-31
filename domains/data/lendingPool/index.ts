import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as reserveDataSelect } from './store/reserveData'

const useLendingPoolService = () => {
  const reserveDataSource = useAppSelector(reserveDataSelect.selectData)

  return {
    reserveDataSource,
  }
}
const { Provider: LendingPoolProvider, createUseContext } = createContext(useLendingPoolService)
export const createLendingPoolContext = createUseContext

export default LendingPoolProvider
