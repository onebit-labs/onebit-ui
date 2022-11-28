import { usePortfolioDailyController } from '../../store/portfolioDaily'
import { useSeriesDailyController } from '../../store/seriesDaily'

export const useOnebitAPIController = () => {
  const { single: seriesDaily } = useSeriesDailyController()
  const { single: portfolioDaily } = usePortfolioDailyController()

  return { seriesDaily, portfolioDaily }
}
