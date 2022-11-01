
import { useLendingPoolController } from '../../store/lendingPool'
import { usePortfolioTermController } from '../../store/portfolioTerm'

export const useOnebitGraphController = () => {
  const { single: lendingPool } = useLendingPoolController()
  const { single: portfolioTerm } = usePortfolioTermController()

  return { lendingPool, portfolioTerm }
}
