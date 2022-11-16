import { useSeriesDailyController } from '../../store/seriesDaily'

export const useOnebitAPIController = () => {
  const { single: seriesDaily } = useSeriesDailyController()

  return { seriesDaily }
}
