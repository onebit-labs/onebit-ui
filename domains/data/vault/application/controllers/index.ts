import { useReserveDataController } from '../../store/reserveData'
import { useReserveNormalizedIncomeController } from '../../store/reserveNormalizedIncome'
import { useUserExpirationTimestampController } from '../../store/userExpirationTimestamp'

export const useVaultController = () => {
  const { polling: reserveData } = useReserveDataController()
  const { single: reserveNormalizedIncome } = useReserveNormalizedIncomeController()
  const { single: userExpirationTimestamp } = useUserExpirationTimestampController()

  return { reserveData, reserveNormalizedIncome, userExpirationTimestamp }
}
