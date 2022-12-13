import { createContext } from 'app/utils/createContext'
import { useAppSelector } from 'store'

import { select as reserveDataSelect } from './store/reserveData'
import { select as reserveNormalizedIncome } from './store/reserveNormalizedIncome'
import { select as userExpirationTimestamp } from './store/userExpirationTimestamp'

const useVaultService = () => {
  const reserveDataSource = useAppSelector(reserveDataSelect.selectData)
  const reserveNormalizedIncomeSource = useAppSelector(reserveNormalizedIncome.selectData)
  const userExpirationTimestampSource = useAppSelector(userExpirationTimestamp.selectData)

  return {
    reserveDataSource,
    reserveNormalizedIncomeSource,
    userExpirationTimestampSource,
  }
}
const { Provider: VaultProvider, createUseContext } = createContext(useVaultService)
export const createVaultContext = createUseContext

export default VaultProvider
