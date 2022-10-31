import { useReserveDataController } from '../../store/reserveData'

export const useLendingPoolController = () => {
  const { polling: reserveData } = useReserveDataController()

  return { reserveData }
}
