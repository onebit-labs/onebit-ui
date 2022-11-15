import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as reserveDataSelect } from './store/reserveData'
import { select as reserveNormalizedIncome } from './store/reserveNormalizedIncome'

const useLendingPoolService = () => {
  const reserveDataSource = useAppSelector(reserveDataSelect.selectData)
  const reserveNormalizedIncomeSource = useAppSelector(reserveNormalizedIncome.selectData)

  return {
    reserveDataSource,
    reserveNormalizedIncomeSource,
  }
}
const { Provider: LendingPoolProvider, createUseContext } = createContext(useLendingPoolService)
export const createLendingPoolContext = createUseContext

export default LendingPoolProvider
