import { useReserveDataController } from '../../store/reserveData'
import { useReserveNormalizedIncomeController } from '../../store/reserveNormalizedIncome'

export const useLendingPoolController = () => {
  const { polling: reserveData } = useReserveDataController()
  const { single: reserveNormalizedIncome } = useReserveNormalizedIncomeController()

  return { reserveData, reserveNormalizedIncome }
}
